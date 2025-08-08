import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";

export function Signup(){
    return <div>
    <div className="h-screen w-screen bg-black/76 flex justify-center items-center ">
    
    <div className="rounded-xl bg-white border p-8 ">
    <div className=" flex justify-center text-blue-400">
        SignUp
    </div>
        <Input placeholder="Username" />
        <Input placeholder="Password"/>

        <div className="flex  justify-center" onClick={()=>{
            
        }}>
        <Button variants="primary" text="Submit" size="md" fullwidth={true} />
   
        </div>
    </div>
        </div>
        </div>
}