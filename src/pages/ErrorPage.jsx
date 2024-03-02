import cluckyImg from "../assets/chick6.png"

export default function ErrorPage ({onClick}){
    return (
        <div className=" h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex flex-col gap-4 md:gap-6 justify-center items-center px-8">
             <img src={cluckyImg} alt="clucky" className="h-40 w-[200px]" />
             <p className="text-xl text-red-500 font-semibold">Can't find the recipe right now.</p>
             <button onClick={onClick}
           className=" py-3 px-10 text-white rounded-md font-bold text-xl bg-gradient-to-r from-rose-400 hover:from-red-500 to-red-500 hover:to-rose-400 hover:shadow-md hover:shadow-rose-400 transition-colors ease-in-out duration-300">
            Try Again
           </button>
        </div>
    )
}