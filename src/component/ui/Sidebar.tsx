import { DocumentIcon } from "../../icons/DocumentIcon";
import { LogoIcon } from "../../icons/LogoIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-76 fixed left-0 top-0">
       <div className="flex items-center p-2 ">
        <LogoIcon size="xl"/> 
        <div className="p-2 font-bold text-2xl tracking-tight">
            SecondBrain
            </div>
        </div> 
        <div className="text-gray-600">
        <SidebarItem icon={<TwitterIcon/>} text='Twitter' />
        <SidebarItem icon={<YoutubeIcon/>} text='Youtube'/>
        <SidebarItem icon={<DocumentIcon/>} text='Document'/>

        </div>
    </div>
}