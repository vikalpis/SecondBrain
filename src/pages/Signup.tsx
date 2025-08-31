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

    async function handleSignup(e:React.FormEvent){
        e.preventDefault()

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if(!username || !password){
            alert("Both fields are required!")
            return;
        }

        try{
            setDisabled(true)
            await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
            username,
            password
        });

        alert("you are signed UP!")
        navigate("/login")
        
        }catch(err){
            console.error(err);
            alert("Signup failed!");
          } finally {
            setDisabled(false);
          }
        
    }
    return <div>
    <div className="h-screen w-full bg-gradient-to-b from-[#D0E3F3] from-0%  to-[#fd7acd] to-100%  justify-center items-center">
    
    <div className="text-4xl  flex justify-center font-bold font-serif py-16 tracking-tighter bg-gradient-to-r from-[#000205] from-40% via-[#e4229d] to-[#d0e3f3]  bg-clip-text text-transparent">
        Welcome Back!
    </div>
    <div className="flex justify-center">
    <div className="rounded-[60px] bg-white/30 backdrop-blur-lg p-8 ">
    <div className=" flex justify-center text-[#062A55] font-semibold text-2xl font-serif min-w-md">
        SignUp
    </div>
    <form onSubmit ={handleSignup} className="flex flex-col gap-10 px-6 py-15 justify-center">
        <div>
            <div className="font-semibold tracking-tighter text-xl font-serif text-[#062A55] px-2">Username:</div>
        <Input variants="primary" ref={usernameRef}  placeholder="Username" />
        </div>
        <div>
            <div className="font-semibold tracking-tighter text-xl font-serif text-[#062A55] px-2">Password:</div>
        <Input variants="primary" ref={passwordRef} placeholder="Password"/>
        </div>
        

        <div className="flex  justify-center " >
        <Button 
        variants="primary" 
        text="SignUp" 
        size="md" 
        fullwidth={true} 
        loading={disabled}
        />
   
        </div>
        </form>
    </div>
    </div>
        </div>
        </div>
}