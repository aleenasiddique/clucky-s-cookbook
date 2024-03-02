import loadingImage from "../assets/dab.png"

export default function LoadingPage(){
    return(
        <div className=" h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex flex-col gap-10 justify-center items-center px-8">
        <div className="relative flex justify-center items-center">
    <div className="absolute animate-spin rounded-full h-36 w-36 border-t-[6px] border-b-[6px] border-rose-500"></div>
    <img src={loadingImage}  className=" h-28 w-28 object-cover"/>
</div>
<div>
<p className="text-lg md:text-xl font-bold text-rose-500 text-center">Watch me Dab while I whip up the perfect recipe for you ...</p>
</div>
</div>
    )
}