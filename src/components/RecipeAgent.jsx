import OpenAI from "openai"

import { getRestrictedFoods } from "./Tools"
import axios from "axios"


export default async function RecipeAgent({userData}){
                //getting open AI key
     const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
       
    })
          //getting youtube API key
     const youtubeKey = process.env.YOUTUBE_API_KEY

    const availableFunctions = {
        getRestrictedFoods
    }
   
                    // openai messages array
    const food = getRestrictedFoods()
    console.log(food)
       const messages = [
        {
            role: "system",
            content:`You are a recipe AI agent. Your task is to provide a detailed recipe based on the user's input. Follow the instructions provided by the user and make use of any additional tools or information if necessary. Ensure that the recipe is presented in the following format. Remember this carefully you must provide the recipe even if the instructions are incomplete or confusing, you try to the best of your abilities and answer in the given format without any extra or irrelevant information or follow-up questions:
            ##Provide the name of dish here. Only display the name like shown in example. for example ##Chicken Biryani
            ## Detailed List of ingredients:
            - Enumerate the ingredients needed for the dish,numbered and  with each ingredient listed on a separate line. Include quantities and any possible substitutions if necessary.
            ## Step by step recipe is as follows:
            - Present the recipe steps in a detailed manner, numbered and with each step listed on a separate line.
            ##Helpful Cooking Tips:
            - Offer some useful cooking tips based on the user's dietary restrictions, allergies, and, cooking skill level.
            Follow this format and section divison strictly and you must start all the sections(The section to provide dishName, Ingredients, Recipe and Tips) with ##`
        }, 
        {
            role: "user",
            content: `dish:${userData.dishName} available ingredients: ${userData.availableIngredients} dietary restrictions: ${userData.dietaryRestrictions} allergies: ${userData.allergies} cooking skills level: ${userData.cookingLevel}` 
        }
       ]
      
       //open ai chat completions end 
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
      
       //getting the dishName to pass to youtube API
       const dishName = openaiRecipeContent.split("##")[1].trim()
     
     
    
                      // calling youtube API to get two recipe videos
               const youtubeResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                  part: 'snippet',
                  q: dishName, 
                  maxResults: 2,
                  key: youtubeKey
                },
              })
              const videoLinks = youtubeResponse.data.items
              console.log(videoLinks)
          return {openaiRecipeContent, videoLinks}
         
        
        }
        catch (error) {
            console.error('Error:', error);
            throw error; // Rethrow the error so it can be caught in the App component
        }
       
    
       
      
       
     
      
}
