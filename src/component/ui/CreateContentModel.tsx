

//controlled component 

import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "./config";

//@ts-ignore
enum ContentType {
    Youtube = "Youtube",
    Twitter = "Twitter",
    Documents = "Documents"
}
  

export function CreateContentModel({open, closeModel}: any){
    const linkRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube)
    async function addContent() {
        try {
          const link = linkRef.current?.value;
          const title = titleRef.current?.value;
          await axios.post(`${BACKEND_URL}/api/v1/content`, { link, title, type }, {
            headers: {
                token: localStorage.getItem("token") || "" 
            }
          });
        
        } catch (err: any) {
          console.error("Error adding content:", err.response?.data || err.message);
        }
      }
    return <div>
       {open &&  <div className=" w-screen h-screen bg-transparent backdrop-blur-sm fixed top-0 left-0 flex justify-center">

        <div className="flex flex-col justify-center ">
            <span className="bg-white/40 backdrop-blur-sm z-40 opacity-100 p-4 rounded-2xl ">
              
            <div className="flex justify-end cursor-pointer  " onClick={closeModel}>
                    <CrossIcon size="lg" />
                    
                </div>
               <div className="gap-4 flex flex-col">
                <div className="text-lg font-semibold text-[#062A55] ">
                  Title
                <Input variants="primary" ref={titleRef} placeholder={"Title"}/>

                </div>

                <div className="text-lg font-semibold text-[#062A55] ">
                  Link
                <Input variants="primary" ref={linkRef} placeholder={"Link"}/>

                </div>
              

               </div>
               <div className="flex justify-center items-center p-4 gap-2">
                <Button text="Youtube" variants={type === ContentType.Youtube ? "primary2" : "secondary"} size="sm" onClick={()=>{
                    setType(ContentType.Youtube)
                    }}/>
                <Button text="Twitter" variants={type === ContentType.Twitter ? "primary2"  :"secondary"} size="sm" onClick={()=>{
                    setType(ContentType.Twitter)
                    }}/>                    
               </div>
               <div className="flex justify-center">
                <Button variants="primary" size="md" text="Submit" onClick={async()=>{
                    await addContent();
                   closeModel();
                }} />
               </div>
            </span>
        </div>
        </div>}
      
        
    </div>
}
