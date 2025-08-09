import { useRef, useState } from "react";
import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../component/ui/config";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)

    async function Signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
            username,
            password
        });
        alert("you are signed UP!")
        navigate("/login")
    }
    return <div>
    <div className="h-screen w-screen bg-black/76 flex justify-center items-center ">
    
    <div className="rounded-xl bg-white border p-8 ">
    <div className=" flex justify-center text-blue-400">
        SignUp
    </div>
        <Input ref={usernameRef}  placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password"/>

        <div className="flex  justify-center" >
        <Button variants="primary" text="Submit" size="md" fullwidth={true} loading={disabled} onClick={()=>{
            Signup()
            setDisabled(e=>!e)
        }}/>
   
        </div>
    </div>
        </div>
        </div>
}