import { Group1 } from '../../src/component/ui/Group1'
import { Lightbulb, Tag, Search, Share, Globe, Bookmark } from "lucide-react"
import { Footer } from '../component/ui/Footer'

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

// function: split into rows of 3
const chunkArray = (arr:any, size:number) => {
  return arr.reduce((acc:any, _:any, i:any) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size))
    return acc
  }, [])
}

export default function HeroSection() {
  const featureRows = chunkArray(features, 3)

  return (
    <div className="bg-[#d0e3F3] overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-start h-15 w-full ml-8 mr-8 p-8">
        <div className="text-[#e4229d] italic text-2xl font-serif p-2">
          SecondBrain
        </div>

        <div className="flex px-40 gap-8 mr-44">
          <div className="text-[#486285] font-serif p-3">ABOUT</div>
          <div className="text-[#486285] font-serif p-3">PRODUCTS</div>
          <div className="text-[#486285] font-serif p-3">CONTACT</div>
        </div>
      </div>

      {/* Main Section (aside + image) */}
      <div className="flex justify-between items-center px-16">
        {/* side1 text */}
        <div className=" w-1/2">
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
        </div>

        {/* right side image */}
        <div className="w-2/5 flex justify-center">
          <Group1 className="w-full h-auto" />
        </div>
      </div>

      <div className="flex shadow-[#e4229d] px-12">
        <span className="px-4 shadow-2xl text-2xl font-serif border-2 m-1 border-[#e4229d]">
          SignUp
        </span>
      </div>

      {/* second phase */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#d0e3f3] via-[#e4229d] to-[#d0e3f3] my-8"></div>

      <div className="flex justify-center gap-6">
        <span className="text-5xl font-bold font-serif text-[#062a55]">
          How
        </span>
        <span className="text-5xl font-bold font-serif bg-gradient-to-r from-[#062a55] via-[#e4229d] to-[#d0e3f3] bg-clip-text text-transparent">
          SecondBrain
        </span>
        <span className="text-5xl font-bold font-serif text-[#062a55]">
          Works
        </span>
      </div>

      {/* cards in rows */}
      <div className="flex flex-col gap-16 mt-20 px-40">
        {featureRows.map((row:any, rowIndex:any) => (
          <div key={rowIndex} className="grid grid-cols-3 gap-10 justify-center">
            {row.map((f:any, i:any) => (
              <div
                key={i}
                className={`h-60 w-72 rounded-4xl bg-[#d0e3f3] border-2 border-[#e4229d] shadow-2xl p-6 flex flex-col items-start justify-start ${
                  i % 2 === 0 ? "mt-20" : ""
                }`}
              >
                {f.icon}
                <h3 className="mt-4 text-xl font-bold text-[#062a55] font-serif">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-[#486285] font-serif">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='mt-4'>
      <Footer/>        
      </div>

    </div>
  )
}
