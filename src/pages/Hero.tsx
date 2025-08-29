
export default function HeroSection(){

  return (
    <div className=" bg-[#d0e3F3] h-screen w-screen text-black ">
   <div className="flex justify-between h-15 w-full ml-8 mr-8 p-8 ">
        <div className="text-[#e4229d] font-style: italic text-2xl font-serif p-2 ">
          SecondBrain
        </div>
       
    <div className="flex mr-44">
          <div className="text-[#486285] font-serif p-3 ">ABOUT</div>
          <div className="text-[#486285] font-serif p-3 ">PRODUCTS</div>
          <div className="text-[#486285] font-serif p-3 ">CONTACT</div>
        </div>
        </div>

        {/* side1 text */}

        <aside className="flex p-16 font-extrabold font-serif text-7xl">
          <p className="text-[#062a55]  ">
            Your
          </p>
          <p  className=" bg-gradient-to-r from-[#062a55] via-[#e4229d] to-[#d0e3f3] bg-clip-text text-transparent ml-10">
            SecondBrain
          </p>
        </aside>
        <aside className="ml-16 flex">
          <p className="font-style: italic font-light text-7xl">for</p>
          <p className="font-extrabold font-serif text-7xl ml-10 text-[#062a55]">Everything</p>
        </aside>

        <aside className="flex">
            <div>
              
            </div>
        </aside>
        </div>
  )
}