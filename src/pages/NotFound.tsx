import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#D0E3F3] via-[#B8D4F0] to-[#DA82C8] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e4229d]/20 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#062A55]/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/15 rounded-full blur-sm animate-bounce"></div>
      </div>
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-8xl font-bold text-blue-500"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-600"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-indigo-600 transition-all"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
