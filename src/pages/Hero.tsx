import {Group1} from '../../src/component/ui/Group1'

export default function HeroSection() {
  return (
    <div className="bg-[#d0e3F3] h-screen overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-between h-15 w-full ml-8 mr-8 p-8">
        <div className="text-[#e4229d] italic text-2xl font-serif p-2">
          SecondBrain
        </div>

        <div className="flex mr-44">
          <div className="text-[#486285] font-serif p-3">ABOUT</div>
          <div className="text-[#486285] font-serif p-3">PRODUCTS</div>
          <div className="text-[#486285] font-serif p-3">CONTACT</div>
        </div>
      </div>

      {/* Main Section (aside + image) */}
      <div className="flex justify-between  px-16 ">
        {/* side1 text */}
        <div className='mt-40'>

       
        <aside className="w-1/2">
          <aside className="flex font-extrabold font-serif text-7xl p-2">
            <p className="text-[#062a55]">Your</p>
            <p className="bg-gradient-to-r from-[#062a55] via-[#e4229d] to-[#d0e3f3] bg-clip-text text-transparent ml-10">
              SecondBrain
            </p>
          </aside>

          <aside className="flex p-2">
            <p className="italic font-light text-7xl">for</p>
            <p className="font-extrabold font-serif text-7xl ml-10 text-[#062a55]">
              Everything
            </p>
          </aside>

          <aside className="flex ml-80 font-extrabold p-2">
            <p className="text-7xl font-serif text-[#062a55]">You</p>
            <p className="text-7xl font-serif text-[#062a55] ml-8">Saved</p>
          </aside>
        </aside>
        </div>
        {/* right side image */}
        <div className=" w-1/2 flex justify-center ml-10 -mt-50">
          {/* Foreground Content */}
          <Group1 />
        </div>
      </div>

{/* 2nd phase */}
      <div className=''>
        
      </div>
    </div>
  )
}
