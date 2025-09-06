import type { ReactElement } from "react";

export function SidebarItem({text,icon, onClick}:
    {
        text: string;
        icon: ReactElement;
        onClick ?: ()=> void
    }
){
    return <div onClick={onClick} className="flex bg-transparent inset-shadow-sm inset-shadow-white/80 shadow m-6 rounded  cursor-pointer hover:scale-105 transition-all duration-300  hover:shadow-2xl">
        <div className="p-2 text-transparent">
            {icon} 
        </div>
        <div className="p-2 text-[#062A55] font-serif">
           {text}  
        </div>
         
    </div>
}