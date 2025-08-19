import { useRef, useState } from "react";
import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../component/ui/config";
import { useNavigate } from "react-router-dom";

export function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault(); 

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Both fields are required!");
      return;
    } 

    try {
      setDisabled(true);
     
      
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/login`, {
        username,
        password,
      });
    
      
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    } finally {
      setDisabled(false);
    }
  }

  return (
    <div className="h-screen w-screen bg-black/76 flex justify-center items-center">
      <div className="rounded-xl bg-white border p-8">
        <div className="flex justify-center text-blue-400">Login</div>

        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input ref={usernameRef} placeholder="Username"  />
          <Input ref={passwordRef} placeholder="Password"   />

          <div className="flex justify-center">
            <Button
              variants="primary"
              text="Submit"
              size="md"
              fullwidth={true}
              loading={disabled}
              
            />
          </div>
        </form>
      </div>
    </div>
  );
}
