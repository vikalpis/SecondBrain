// Sidebar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DocumentIcon } from "../../icons/DocumentIcon";
import { LogoIcon } from "../../icons/LogoIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
// import { Menu, X } from "lucide-react"; // hamburger & close icons

export function Sidebar({ onSelectType }: { onSelectType: (type: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      {/* <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 bg-transparent rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div> */}

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || typeof window !== "undefined") && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={` h-screen bg-transparent  
              ${isOpen ? "sm:w-64" : "sm:w-72 sm:block hidden"}`}
          >
            {/* Logo Section */}
            <div className="flex items-center p-4 cursor-pointer ">
              <LogoIcon size="2xl" />
              <span className="m-3 font-bold text-2xl font-serif tracking-tight bg-gradient-to-r from-[#062A55] to-[#e4229d] bg-clip-text text-transparent">SecondBrain</span>
            </div>

            {/* Sidebar Items */}
            <div className="flex flex-col gap-1 mt-2 text-gray-600">
              <SidebarItem
                icon={<TwitterIcon />}
                text="Twitter"
                onClick={() => onSelectType("Twitter")}
              />
              <SidebarItem
                icon={<YoutubeIcon />}
                text="Youtube"
                onClick={() => onSelectType("Youtube")}
              />
              <SidebarItem
                icon={<DocumentIcon />}
                text="Document"
                onClick={() => onSelectType("Document")}
              />
              <SidebarItem
                icon={<DocumentIcon />}
                text="All"
                onClick={() => onSelectType("")}
              />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Background overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 sm:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
