
//another controlled component
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

export function ShareModel({openShare, closeShare}:any){
    const hash = "diudiajsdowhehqow ";

    async function handleCopy(){
     try {
        await navigator.clipboard.writeText(hash);
        alert('link copied to your clipboard')
        } catch (error) {
        console.error("Failed to copy:", error);
        }
    }
    return <div>
     {openShare && <div className=" w-screen h-screen bg-slate-400 opacity-60 fixed top-0 left-0 flex justify-center">
        <div className="flex items-center justify-center ">
            <div className=" bg-white  rounded-2xl p-2">
                <div className="flex justify-end cursor-pointer " onClick={closeShare}>
                    <CrossIcon size="lg" onClick={closeShare}/>
                </div>
               
                <div className="text-2xl ">
                    {hash}
                     your link is here .............
                </div>
               
                <div className="p-2">
                    <Button 
                    variants="primary" 
                    size="sm" 
                    text="Copy" 
                    fullwidth={true}
                   onClick={handleCopy}
                    />
  
                </div>

            </div>
        </div>
    </div>}
    </div>
}