import { useState } from "react"
import { Group1 } from '../../src/component/ui/Group1'
import { Lightbulb, Tag, Search, Share, Globe, Bookmark, Menu, X } from "lucide-react"
import { Footer } from '../component/ui/Footer'
import { Link } from "react-router-dom"


const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[#e4229d]" />,
    title: "Save & Preview",
    desc: "Instantly save YouTube and Twitter links with rich previews so you can see your content at a glance."
  },
  {
    icon: <Tag className="w-8 h-8 text-[#e4229d]" />,
    title: "Organize with Tags",
    desc: "Group and filter your saved content using custom tags for easy retrieval."
  },
  {
    icon: <Search className="w-8 h-8 text-[#e4229d]" />,
    title: "Fast Search",
    desc: "Quickly find your saved items with lightning-fast search functionality."
  },
  {
    icon: <Share className="w-8 h-8 text-[#e4229d]" />,
    title: "Share Content",
    desc: "Send saved items to friends, colleagues, or collaborators in seconds."
  },
  {
    icon: <Globe className="w-8 h-8 text-[#e4229d]" />,
    title: "Anytime, Anywhere",
    desc: "Access your Second Brain from any device with an internet connection."
  },
  {
    icon: <Bookmark className="w-8 h-8 text-[#e4229d]" />,
    title: "Smart Bookmarking",
    desc: "Save anything from the web with one click and keep it beautifully organized."
  }
]

const chunkArray = (arr:any, size:number) => {
  return arr.reduce((acc:any, _:any, i:any) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size))
    return acc
  }, [])
}

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)
  const featureRows = chunkArray(features, 3)

  return (

    <div className="bg-[#d0e3F3] overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-6">
        {/* Logo */}
        <div className="text-[#e4229d] italic text-2xl font-serif p-2">
          SecondBrain
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 relative z-50">
        <Link className="text-[#486285] font-serif duration-200 animate-slideIn" to="/About">ABOUT</Link>
          <Link className="text-[#486285] font-serif duration-300 animate-slideIn" to="/Product">PRODUCTS</Link>
          <Link className="text-[#486285] font-serif duration-500 animate-slideIn cursor-pointer scroll-smooth" to="/Contact">CONTACT</Link>
        </div>

        {/* Desktop SignUp */}
        <div className="hidden md:flex md:gap-2 shadow-[#e4229d] relative z-50">
        <Link
          to="/Signup"
          className="px-4 py-1 shadow-2xl text-lg font-serif border-2 border-[#e4229d]">
            SignUp
          </Link>
          <Link
          to="/Login"
          className="px-4 py-1 shadow-2xl text-lg font-serif border-2 border-[#e4229d]">
            LogIn
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden relative z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8 text-[#e4229d]" /> : <Menu className="w-8 h-8 text-[#e4229d]" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 bg-[#d0e3F3] relative   ">
          <Link className="text-[#486285] font-serif duration-200 animate-slideIn" to="/About">ABOUT</Link>
          <Link className="text-[#486285] font-serif duration-300 animate-slideIn" to="/Product">PRODUCTS</Link>
          <Link className="text-[#486285] font-serif duration-500 animate-slideIn cursor-pointer " to="/Contact">CONTACT</Link>
          <Link
          to="/Signup"
          className="px-4 py-1 shadow-2xl rounded-xl text-lg font-serif border-2 border-[#e4229d] animate-slideIn duration-700">
            SignUp
          </Link>
          <Link
          to="/LogIn"
          className="px-4 py-1 shadow-2xl rounded-xl text-lg font-serif border-2 border-[#e4229d] animate-slideIn duration-700">
            LogIn
          </Link>
        </div>
      )}

      {/* Main Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-16 gap-10">
        {/* Left text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <aside className="flex flex-wrap font-extrabold font-serif text-4xl md:text-6xl lg:text-7xl justify-center lg:justify-start p-2">
            <p className="text-[#062a55]">Your</p>
            <p className="bg-gradient-to-r from-[#062a55] via-[#e4229d] to-[#d0e3f3] bg-clip-text text-transparent ml-4 lg:ml-10">
              SecondBrain
            </p>
          </aside>

          <aside className="flex flex-wrap justify-center lg:justify-start p-2">
            <p className="italic font-light text-4xl md:text-6xl lg:text-7xl">for</p>
            <p className="font-extrabold font-serif text-4xl md:text-6xl lg:text-7xl ml-4 lg:ml-10 text-[#062a55]">
              Everything
            </p>
          </aside>

          <aside className="flex flex-wrap justify-center lg:justify-start lg:ml-80 font-extrabold p-2">
            <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#062a55]">You</p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#062a55] ml-4 lg:ml-8">Saved</p>
          </aside>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-2/5 -mt-25 -mb-35 flex justify-center">
          <Group1 className="w-3/4 md:w-full h-auto" />
        </div>
      </div>

      {/* Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#d0e3f3] via-[#e4229d] to-[#d0e3f3] my-8"></div>

      {/* Section title */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-center">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#062a55]">
          How
        </span>
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif bg-gradient-to-r from-[#062a55] via-[#e4229d] to-[#d0e3f3] bg-clip-text text-transparent">
          SecondBrain
        </span>
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#062a55]">
          Works
        </span>
      </div>

      {/* Feature cards */}
      <div className="flex flex-col gap-16 mt-20 px-6 md:px-20 lg:px-40">
        {featureRows.map((row:any, rowIndex:any) => (
          <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {row.map((f:any, i:any) => (
              <div
                key={i}
                className={`h-auto min-h-[220px] w-full sm:w-72 rounded-4xl bg-[#d0e3f3] border-2 border-[#e4229d] shadow-2xl p-6 flex flex-col items-start justify-start ${
                  i % 2 === 0 ? "mt-10 lg:mt-20" : ""
                }`}
              >
                {f.icon}
                <h3 className="mt-4 text-lg md:text-xl font-bold text-[#062a55] font-serif">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-[#486285] font-serif">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className='mt-8'>
        <Footer/>        
      </div>
    </div>
  )
}
