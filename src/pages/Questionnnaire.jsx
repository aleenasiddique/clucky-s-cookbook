import cluckyImg from "../assets/clucky.png"
import gettingRecipeImg from "../assets/clucky2.png"

export default function Questionnaire({handleFormSubmit, userData, setUserData}){

    const handleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit()
    }   
    
    //handling inputs
     const handleChange = (event) => {
         setUserData(prevUserData => {
            const updatedUserData =  {
            ...prevUserData, 
            [event.target.name]: event.target.value
            }
            console.log(updatedUserData)
            return (updatedUserData)
         })
         
     }

    return (
        <div className=" bg-gradient-to-r from-rose-100 to-teal-100  py-16 md:py-28 px-8 ">
            <div className="h-full w-full relative flex justify-center">
            <div className="flex flex-col items-center  max-w-[800px]">
            <p className="text-xl md:text-2xl text-center font-bold t mb-8 md:mb-12 text-rose-500">Hi, I'm Clucky <span><img src={cluckyImg} alt="clucky" className="h-10 w-12 inline"/></span> I find you the best Recipes based on your preferences. Let's get Started!!</p>
               <form onSubmit={handleSubmit} 
            className="w-full">
                <label htmlFor="dish" className=" ml-6 block font-bold text-xl text-gray-700  mb-1">1. What do you feel like Cookin' today?</label>
                <input
                id="dish"
                 type="text" 
                 value={userData.dishName}
                name="dishName"
                onChange={handleChange}
                required
                className="w-full h-14 border-2 border-zinc-300 focus:border-zinc-300 outline-none bg-white/30 rounded-3xl px-8 caret-gray-400"
                placeholder="Chicken Biryani OR Umm not sure..."
                ></input>
                <label htmlFor="ingredients" className=" ml-6 block font-bold text-gray-700 text-xl mb-1 mt-6">
                    2. Not sure what to make? No worries, Let me know some of the available ingredients that you'll like to use?</label>
                <input
                id="ingredients"
                type="text" 
                value={userData.availableIngredients}
                name="availableIngredients"
                onChange={handleChange}
                required
                className="w-full h-14 border-2 border-zinc-300 focus:border-zinc-300 outline-none bg-white/30 rounded-3xl px-8 caret-gray-400"
                placeholder="Chicken, Cabbage, Carrots..."
                ></input>
                  <label htmlFor="restrictions" className=" ml-6 block font-bold text-gray-700 text-xl mb-1 mt-6">
                    3. Do you have any dietary restrictions?</label>
                    <select 
                id="restrictions"
                value={userData.dietaryRestrictions}
                name="dietaryRestrictions"
                onChange={handleChange}
                required
                className="w-full h-14 border-2 border-zinc-300 focus:border-zinc-300 outline-none bg-white/30 rounded-3xl px-8">
                    <option value="none">None</option>
                    <option value="halal">Halal</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="glutenFree">Gluten Free</option>
                    <option value="keto">Keto</option>
                    <option value="paleo">Paleo</option>
                    <option value="lowCarb">Low Carb</option>
                    <option value="heartHealthy">Heart Healthy</option>
                    <option value="diabetesFriendly">Diabetes Friendly</option>
                    
                </select> 
                 <label htmlFor="allergies" className=" ml-6 block font-bold text-gray-700 text-xl mb-1 mt-6">
                    4. Are you allergic to any of the food item?</label>
                <input
                id="allergies"
                 type="text"
                 value={userData.allergies}
                name="allergies"
                onChange={handleChange}
                required
                 className="w-full h-14 border-2 border-zinc-300 focus:border-zinc-300 outline-none bg-white/30 rounded-3xl px-8 caret-gray-400"
                placeholder="I'm allergic to dairy products..."
                ></input>
               
                <label htmlFor="cookingLevel" className=" ml-6 block font-bold text-gray-700 text-xl mb-1 mt-6">
                    5. How would you rate your cooking skills from 'can boil an egg' to 'I can saute&#x301; with the best of them?</label>
                <select
                id="cookingLevel"
                value={userData.cookingLevel}
                name="cookingLevel"
                onChange={handleChange}
                required
                className="w-full h-14 border-2 border-zinc-300 focus:border-zinc-300 outline-none bg-white/30 rounded-3xl px-8">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Pro</option>
                </select>
                <div className="w-full flex justify-center">
               <button className=" mt-10 py-3 px-12 text-white rounded-md font-bold text-2xl bg-gradient-to-r from-rose-400 hover:from-red-500 to-red-500 hover:to-rose-400 hover:shadow-md hover:shadow-rose-400 transition-colors ease-in-out duration-300">Get the Recipe</button>
               </div>
            </form>
            </div>
            <div className="hidden md:inline absolute left-[80%] top-[80%]">
                <img src={gettingRecipeImg} alt="clucky" />
            </div>
            </div>
            
        </div>
    )
}