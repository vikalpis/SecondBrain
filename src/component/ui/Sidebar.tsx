import { DocumentIcon } from "../../icons/DocumentIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-76 fixed left-0 top-0">
        hi there 
        <div className="text-gray-600">
        <SidebarItem icon={<TwitterIcon/>} text='Twitter' />
        <SidebarItem icon={<YoutubeIcon/>} text='Youtube'/>
        <SidebarItem icon={<DocumentIcon/>} text='Document'/>

        </div>
    </div>
}