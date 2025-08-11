import { DocumentIcon } from "../../icons/DocumentIcon";
import { LogoIcon } from "../../icons/LogoIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return (
        <div className="hidden  lg:block transition-all duration-300 sm:h-screen bg-white border-r sm:w-76 fixed left-0 top-0">
            <div className=" hidden sm:flex items-center p-2 m-2 cursor-pointer">
                <LogoIcon size="xl" /> 
                <div className="p-2 font-bold text-2xl tracking-tight">
                    SecondBrain
                </div>
            </div> 
            <div className="text-gray-600">
                <SidebarItem icon={<TwitterIcon />} text="Twitter" />
                <SidebarItem icon={<YoutubeIcon />} text="Youtube" />
                <SidebarItem icon={<DocumentIcon />} text="Document" />
            </div>
        </div>
    );
}
