import axios from "axios";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { BACKEND_URL } from "./config";
import { useContent } from "../../hooks/useContent";
import { ShareModel } from "./ShareModel";
import { useState } from "react";
import {TitleIcon} from "../../icons/TitleIcon"

interface Cradprops {
  _id : string;
  title: string;
  link: string;
  type: "Twitter" | "Youtube"| "Document";
  onClick?: ()=>void
}

function getYoutubeEmbedUrl(url: string) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
}

 

export function Card({ title, link, type,_id }: Cradprops) {
  const {setContents} = useContent()
  const [openShare, setOpenShare] = useState(false)
   // delete logic
   async function DeleteCard(id: string) {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          token: localStorage.getItem("token") || ""
        },
        data: { id }   // 👈 sending content id in body
      })

      // update frontend state after deletion
      setContents(prev => prev.filter(item => item._id !== id))
    } catch (err) {
      console.error("Error deleting content", err)
    }
  }
  return (
    <div>
      <ShareModel openShare={openShare} closeShare={()=> setOpenShare((e)=>!e) } contentId={_id}/>
      <div  className="backdrop-blur-sm bg-[#D0E3F3] drop-shadow-[#062A55]  rounded-md min-h-40 min-w-40 ">
        <div className="flex justify-between">
          <div className="flex items-center p-2 cursor-pointer">
            <TitleIcon size="md" />
            <div className="pl-2">{title}</div>
          </div>
          <div className="flex items-center text-gray-500">
            <div  className="pr-2 cursor-pointer">
                <DeleteIcon size="md" onClick={() => DeleteCard(_id)}   />
             
            </div>
            <div className="pr-2 cursor-pointer">
              <ShareIcon size="md" onClick={()=>setOpenShare((e)=>!e)}/>
            </div>
          </div>
        </div>
        <div className="p-2">
          {type === "Youtube" && (
            <iframe
              className="w-full p-4 rounded-md"
              src={getYoutubeEmbedUrl(link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "Twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x", "twitter")}></a>
            </blockquote>
          )}

         
        </div>
      </div>
    </div>
  );
}
