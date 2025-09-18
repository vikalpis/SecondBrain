import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DocumentIcon } from "../../icons/DocumentIcon";
import { LogoIcon } from "../../icons/LogoIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export function Sidebar({ onSelectType }: { onSelectType: (type: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="sm:hidden top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 bg-transparent rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 640) && ( // show on mobile when open, always on desktop
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed sm:static top-0 left-0 h-full bg-transparent z-40 w-64 sm:w-72`}
          >
            {/* Logo Section */}
            <div className="flex items-center p-4 cursor-pointer">
              <LogoIcon size="2xl" />
              <span className="m-3 font-bold text-2xl font-serif tracking-tight bg-gradient-to-r from-[#062A55] to-[#e4229d] bg-clip-text text-transparent">
                SecondBrain
              </span>
            </div>

            {/* Sidebar Items */}
            <div className="flex flex-col gap-1 mt-2 text-gray-600">
              <SidebarItem
                icon={<DocumentIcon />}
                text="All"
                onClick={() => {
                  onSelectType("");
                  setIsOpen(false); // 👈 close on mobile
                }}
              />
              <SidebarItem
                icon={<TwitterIcon />}
                text="Twitter"
                onClick={() => {
                  onSelectType("Twitter");
                  setIsOpen(false);
                }}
              />
              <SidebarItem
                icon={<YoutubeIcon />}
                text="Youtube"
                onClick={() => {
                  onSelectType("Youtube");
                  setIsOpen(false);
                }}
              />
              <SidebarItem
                icon={<DocumentIcon />}
                text="Document"
                onClick={() => {
                  onSelectType("Document");
                  setIsOpen(false);
                }}
              />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Background overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-2xl bg-opacity-30 sm:hidden z-30"
          onClick={() => setIsOpen(false)} // 👈 close sidebar if user taps outside
        />
      )}
    </>
  );
}
