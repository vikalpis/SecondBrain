

//controlled component 

import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "./config";

enum ContentType {
    Youtube = "Youtube",
    Twitter = "Twitter"
}
  console.log(localStorage.getItem("token"));

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
       {open &&  <div className=" w-screen h-screen bg-slate-400 opacity-60 fixed top-0 left-0 flex justify-center">

        <div className="flex flex-col justify-center max-w-72">
            <span className="bg-white opacity-100 p-4 rounded ">
              
            <div className="flex justify-end cursor-pointer" onClick={closeModel}>
                    <CrossIcon size="lg" />
                    
                </div>
               <div>
                <Input ref={titleRef} placeholder={"Title"}/>
                <Input ref={linkRef} placeholder={"Link"}/>
              

               </div>
               <div className="flex justify-center items-center p-4 gap-2">
                <Button text="Youtube" variants={type === ContentType.Youtube ? "primary" : "secondary"} size="md" onClick={()=>{
                    setType(ContentType.Youtube)
                    }}/>
                <Button text="Twitter" variants={type === ContentType.Twitter ? "primary"  :"secondary"} size="md" onClick={()=>{
                    setType(ContentType.Twitter)
                    }}/>
               </div>
               <div className="flex justify-center">
                <Button variants="primary" size="md" text="Submit" onClick={()=>{
                    addContent()
                }} />
               </div>
            </span>
        </div>
        </div>}
      
        
    </div>
}
