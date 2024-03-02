import Typewriter from "typewriter-effect"
import ingredientImg from "../assets/chick8.png"
import recipeImg from "../assets/chick1.png"
import tipsImg from "../assets/chick9.png"
import cluckyImg from "../assets/clucky3.png"
export default function Recipes ({recipeData, onClick}){
   //taking dishName, ingredients, recipe and tips from data outputed from open ai 
    const dishName = recipeData.openaiRecipeContent.split("##")[1].trim()
    const ingredients = recipeData.openaiRecipeContent.split("##")[2].trim()
    const recipe = recipeData.openaiRecipeContent.split("##")[3].trim()
    const tips = recipeData.openaiRecipeContent.split("##")[4].trim()
    return (
        <div className="px-8 py-16  md:p-24 bg-gradient-to-r from-rose-100 to-teal-100">
          <div className="h-full w-full relative">
              <p className=" font-yeseva  font-bold text-4xl md:text-5xl text-red-500 text-center mt-2">
           <Typewriter
  options={{
    strings: [`${dishName}`],
    autoStart: true,
    loop: true,
  }}
/>
             </p>
             <div className="flex gap-1 items-center">
             
             <h3 className="font-yeseva  font-bold text-2xl  text-red-500 mt-3 mb-1">Ingredients</h3>
             <img src={ingredientImg} alt="chicken" className="h-12 w-10"/>
             </div>
             {/*maping over the ingredients to make a list */ }
         <ul>
        {ingredients.split('\n').map((ingredient, index) => (
          <li className="text-lg text-gray-700 tracking-wide"key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="flex gap-1 items-center">
             
             <h3 className="font-yeseva  font-bold text-2xl  text-red-500 mt-3 mb-1">Detailed Recipe</h3>
             <img src={recipeImg} alt="chicken" className="h-12 w-11"/>
             </div>
              {/*maping over recipe steps to make a list */ }
      <ul>
        {recipe.split('\n').map((step, index) => (
          <li className="text-lg text-gray-700 tracking-wide"key={index}>{step}</li>
        ))}
      </ul>
      <div className="flex gap-1 items-center">
             
             <h3 className="font-yeseva  font-bold text-2xl  text-red-500 mt-3 mb-1">Cooking Tips</h3>
             <img src={tipsImg} alt="chicken" className="h-12 w-11"/>
             </div>
              {/*maping over cooking tips to make a list */ }
      <ul>
        {tips.split('\n').map((tip, index) => (
          <li className="text-lg text-gray-700 tracking-wide" key={index}>{tip}</li>
        ))}
      </ul>
      <h3 className="font-yeseva  text-center font-bold text-2xl md:text-3xl text-red-500 mt-6 mb-2">Related Videos</h3>
      <p className="text-center mb-4 text-gray-700 text-lg font-semibold ">Here are links to some video recipe tutorials and demonstrations</p>
      {/* youtube recipe snippets here*/ }
       <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">{recipeData.videoLinks.map((video) => (
         <div className="border-2 border-zinc-300 rounded-xl p-4 w-[330px] md:w-[500px]" key={video.id.videoId}>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img className="w-[300px] h-[230px] md:w-[470px] md:h-[350px] rounded-xl hover:scale-[0.97] transition-transform duration-300" src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
              <p className="text-sm md:text-base ml-2 underline text-gray-700 mt-2">{video.snippet.title}</p>
              <p className="ml-2  text-gray-700 text-lg">{video.snippet.channelTitle}</p>
            </a>
         </div>
       ))
       }</div>
       <div className="w-full text-center mt-8">
       <button onClick={onClick}
           className=" py-3 px-10 text-white rounded-md font-bold text-xl bg-gradient-to-r from-rose-400 hover:from-red-500 to-red-500 hover:to-rose-400 hover:shadow-md hover:shadow-rose-400 transition-colors ease-in-out duration-300">
            Get More Recipes
           </button>
           </div>
           <div className="hidden md:inline absolute left-[70%] top-[5%]">
                <img src={cluckyImg} alt="clucky" />
            </div>
           </div>
           
        </div>
    )
}