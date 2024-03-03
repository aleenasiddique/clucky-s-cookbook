import OpenAI from "openai"

import dietaryRestrictions from "../../../src/data"


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
 
})  

const youtubeKey = process.env.YOUTUBE_API_KEY

// Function to provide restricted foods list based on user's dietary restrictions
async function getRestrictedFoods(selectedRestriction) {
  try {
      if (selectedRestriction === 'none') {
          return [] // No restrictions
      }
        
      // Check if the selected restriction exists as a key in dietaryRestrictions
      if (selectedRestriction in dietaryRestrictions) {
          const restrictedFood =  dietaryRestrictions[selectedRestriction]
          return restrictedFood
      }
      else {
          return selectedRestriction
      }
  } 
  catch (error) {
      throw new Error('Failed to get restricted foods')
  }
}

const handler = async (event) => {
  const messages = JSON.parse(event.body)
  try {
   /* const runner = openai.beta.chat.completions.runTools({
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
     const openaiRecipeContent = await runner.finalContent()  */
    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: messages
       }),
    
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
