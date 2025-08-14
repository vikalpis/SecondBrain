import type { ReactElement } from "react";

export function SidebarItem({text,icon, onClick}:
    {
        text: string;
        icon: ReactElement;
        onClick ?: ()=> void
    }
){
    return <div onClick={onClick} className="flex  shadow m-6 rounded hover:bg-gray-200 cursor-pointer transition-all duration-200">
        <div className="p-2">
            {icon} 
        </div>
        <div className="p-2">
           {text}  
        </div>
         
    </div>
}