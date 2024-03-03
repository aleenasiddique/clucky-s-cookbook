import OpenAI from "openai"
import { getRestrictedFoods } from "../../../src/components/Tools"
import dietaryRestrictions from "../../../src/data"


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
 
})  

const youtubeKey = process.env.YOUTUBE_API_KEY
const data = dietaryRestrictions

const availableFunctions = {
  getRestrictedFoods
}
const food = getRestrictedFoods()
console.log(food)



const handler = async (event) => {
  const messages = JSON.parse(event.body)
  try {
    const runner = openai.beta.chat.completions.runTools({
      model: "gpt-3.5-turbo-1106",
      messages,
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
        reply: data
       }),
    
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
