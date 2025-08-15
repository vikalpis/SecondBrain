import { motion } from "framer-motion";
import { UserPlus, Link, Tag, Search, Share2, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/ui/Button";

export default function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <UserPlus className="w-10 h-10 text-indigo-600" />,
      title: "Sign Up / Log In",
      desc: "Create your free account to start building your Second Brain."
    },
    {
      icon: <Link className="w-10 h-10 text-indigo-600" />,
      title: "Add Content",
      desc: "Paste your YouTube or Twitter link, and we’ll fetch the preview automatically."
    },
    {
      icon: <Tag className="w-10 h-10 text-indigo-600" />,
      title: "Organize with Tags",
      desc: "Label your saved content to make searching easier."
    },
    {
      icon: <Search className="w-10 h-10 text-indigo-600" />,
      title: "Search Content",
      desc: "Find exactly what you’re looking for in seconds."
    },
    {
      icon: <Share2 className="w-10 h-10 text-indigo-600" />,
      title: "Share Content",
      desc: "Send saved items to friends, teammates, or anyone else."
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-600" />,
      title: "Access Anywhere",
      desc: "Your library is synced across devices for easy access anytime."
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
          How <span className="text-indigo-600 tracking-tight">SecondBrain</span> Works
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A simple process to save, organize, and access your favorite online content.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border"
          >
            {step.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button text="Back to Home" size="xl2" variants="primary" onClick={()=>{navigate("/")}}/>
       
      </div>
    </div>
  );
}
