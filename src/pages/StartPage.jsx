import Typewriter from "typewriter-effect"
import BackgroundAnimation from "../components/BackgroundAnimation"
import startImage from "../assets/start.png"

export default function StartPage ({ onStartClick }) {
    return (
        <main >
      <div className="h-screen relative bg-gradient-to-r from-rose-100 to-teal-100 z-20">
       
        <BackgroundAnimation />
        
        <div className="h-full flex flex-col justify-center items-center px-8">
           <img src={startImage} alt="clucky" className="w-36 md:w-44 h-40 md:h-48"/>
           <p className=" font-yeseva  font-bold text-3xl md:text-4xl text-red-500 text-center mt-2">
           <Typewriter
  options={{
    strings: [`Clucky's CookBook`],
    autoStart: true,
    loop: true,
  }}
/>
             </p>
           <p className="md:text-xl font-extrabold md:font-bold mt-1 text-zinc-800 text-center md:w-[530px] tracking-wide">Chef's Kiss Recipes Straight From My Grandma's Pantry To You! &#x28; Eeeee Kidding &#129312; &#x29;</p>
           <button onClick={onStartClick}
           className=" mt-6 py-3 px-10 text-white rounded-md font-bold text-xl bg-gradient-to-r from-rose-400 hover:from-red-500 to-red-500 hover:to-rose-400 hover:shadow-md hover:shadow-rose-400 transition-colors ease-in-out duration-300">
            Let's Get Cookin'
           </button>
        </div>
        </div>
        </main>
    )
}