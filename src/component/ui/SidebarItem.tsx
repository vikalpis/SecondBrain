import type { ReactElement } from "react";

export function SidebarItem({text,icon}:
    {
        text: string;
        icon: ReactElement;
    }
){
    return <div className="flex  shadow m-6 rounded hover:bg-gray-200 cursor-pointer transition-all duration-200">
        <div className="p-2">
            {icon} 
        </div>
        <div className="p-2">
           {text}  
        </div>
         
    </div>
}