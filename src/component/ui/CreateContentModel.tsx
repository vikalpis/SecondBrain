

//controlled component 

import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModel({open, closeModel}: any){

    return <div>
       {open &&  <div className=" w-screen h-screen bg-slate-400 opacity-60 fixed top-0 left-0 flex justify-center">

        <div className="flex flex-col justify-center max-w-72">
            <span className="bg-white opacity-100 p-4 rounded ">
              
            <div className="flex justify-end cursor-pointer" onClick={closeModel}>
                    <CrossIcon size="lg" />
                    
                </div>
               <div>
                <Input placeholder={"Title"}/>
                <Input placeholder={"Link"}/>
                <Input placeholder={"type"}/>

               </div>
               <div className="flex justify-center">
                <Button variants="primary" size="md" text="Submit" />
               </div>
            </span>
        </div>
        </div>}
        
    </div>
}
interface inputprops {
    onChange ?: ()=>void;
    placeholder: string
}
function Input ({onChange, placeholder}: inputprops){
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" onChange={onChange} />
    </div>
}