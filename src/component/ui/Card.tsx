import { ShareIcon } from "../../icons/ShareIcon";

interface Cradprops{
    title : string,
    link: string,
    type: "twitter" | "youtube" 
}

export function Card ({title, link, type}: Cradprops){
    return <div>
        <div className="bg-white border border-gray-200 max-w-86 rounded-md min-h-40 min-w-72 ">
            <div className="flex justify-between">
                <div className="flex items-center p-2">
                    <ShareIcon size="md"/>
                    <div className="pl-2">
                        {title}
                    </div>
                </div>
                <div className="flex items-center text-gray-500">
                    <div className="pr-2">
                        <a href={link} target="_blank">
                        <ShareIcon size="md"/></a>
                    </div>
                    <div className="pr-2">
                        <ShareIcon size="md"/>

                    </div>
                </div>
                </div>
                <div className=" p-2">
                    {type === "youtube" &&  <iframe className="w-full p-4 rounded-md" src= {link.replace("watch", "embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                 
                    {type ==="twitter" && <blockquote className="twitter-tweet">
                     <a href={link.replace("x", "twitter")}></a> 
                    </blockquote>}
                    
                </div>
            
        </div>

    </div>
}