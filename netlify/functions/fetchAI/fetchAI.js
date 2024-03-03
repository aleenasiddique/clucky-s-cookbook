import OpenAI from "openai"

import { getRestrictedFoods } from "../../../src/tools"


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
 
})  

const youtubeKey = process.env.YOUTUBE_API_KEY



const handler = async (event) => {
  const messages = JSON.parse(event.body)
  try {
    const runner = openai.beta.chat.completions.runTools({
      model: "gpt-3.5-turbo-1106",
      messages: messages, 
      tools: [
          {
            type: 'function',
            function: {
              function: getRestrictedFoods,
              parameters: { type: 'object',
               properties: {
                selectedRestriction: {
                  type: "string",
                  description: "The dietary Restriction that user have for which we need to get the list of restricted items"
              }
               }  },
            }
          }
          ],
     })
     const openaiRecipeContent = await runner.finalContent()  
    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: openaiRecipeContent
       }),
    
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
