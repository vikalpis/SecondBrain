import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "../component/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../component/ui/config";
import { useNavigate } from "react-router-dom";
import { Input } from "../component/ui/Input";


export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef= useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup clicked:", { email, password });
  };

  async function Signup(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        username,
        password
    });
    alert("you are signed UP!")
    navigate("/Login")
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Your <span className="text-indigo-600  tracking-tight">SecondBrain</span> for
            Everything You Save
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Save your favorite YouTube videos, Twitter posts, and more in one
            place. Organize, search, and access them anytime.
          </p>

          <div className="mt-8 flex gap-4">
            <Button text="Learn More" size="md" variants="primary" onClick={()=> {navigate("/learn-more")}}/>
            {/* <button onClick={()=>} className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition-all cursor-pointer">
              Learn More
            </button> */}
            <button onClick={()=> navigate("/how-it-works")} className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
              See How it Works
            </button>
          </div>
        </motion.div>

        {/* Right - Signup Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">
              Create your free account
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Save & organize your ideas in seconds.
            </p>

            <form onSubmit={handleSignup} className="mt-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input ref={usernameRef} placeholder="username" onChange={(e)=>setEmail(e.target.value)} />
                {/* <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="you@example.com"
                /> */}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input ref={passwordRef} placeholder="********" onChange={(e) => setPassword(e.target.value)}/>
                {/* <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="••••••••"
                /> */}
              </div>

              <Button text="Sign Up" variants="primary" size="xl" onClick={Signup}/>
                {/* type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow hover:bg-indigo-700 transition-all"
              >
                Sign Up
              </button> */}
            </form>

            <p className="mt-4 text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/Login"
                className="text-indigo-600 hover:underline font-medium"
              >
                Log in
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
