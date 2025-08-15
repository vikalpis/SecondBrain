import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lightbulb, Tag, Search, Share, Globe } from "lucide-react";
import { Button } from "../component/ui/Button";

export default function LearnMore() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
      title: "Save & Preview",
      desc: "Instantly save YouTube and Twitter links with rich previews so you can see your content at a glance."
    },
    {
      icon: <Tag className="w-8 h-8 text-indigo-600" />,
      title: "Organize with Tags",
      desc: "Group and filter your saved content using custom tags for easy retrieval."
    },
    {
      icon: <Search className="w-8 h-8 text-indigo-600" />,
      title: "Fast Search",
      desc: "Quickly find your saved items with lightning-fast search functionality."
    },
    {
      icon: <Share className="w-8 h-8 text-indigo-600" />,
      title: "Share Content",
      desc: "Send saved items to friends, colleagues, or collaborators in seconds."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Anytime, Anywhere",
      desc: "Access your Second Brain from any device with an internet connection."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Learn More About <span className="text-indigo-600 tracking-tight">SecondBrain</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Replace scattered bookmarks and notes with a single hub that keeps your favorite links organized and accessible.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border"
          >
            {f.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button text="See How It Works" size="xl2" variants="primary" onClick={()=>{navigate("/how-it-works")}}/>
        
      </div>
    </div>
  );
}
