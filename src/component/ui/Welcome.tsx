import { useEffect } from "react";
export default function  WelcomeToaster({ onClose }: any) {
    useEffect(() => {
      const timer = setTimeout(() => onClose(), 4000);
      return () => clearTimeout(timer);
    }, [onClose]);
  
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center gap-3 rounded-2xl shadow-lg border border-[#062A55] px-5 py-3 max-w-sm animate-slideIn bg-[#D0E3F3] inset-shadow-sm inset-shadow-[#062A55]/20">
          <div className="w-3 h-3 rounded-full bg-[#DA82C8]" />
          <p className="text-[#062A55] font-medium">
            Welcome To The SecondBrain
          </p>
          <button onClick={onClose} className="ml-auto">
            ✖
          </button>
        </div>
      </div>
    );
  }
  