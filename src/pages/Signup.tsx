import type React from "react"

import { useRef, useState } from "react"
import { Button } from "../component/ui/Button"
import { Input } from "../component/ui/Input"
import axios from "axios"
import { BACKEND_URL } from "../component/ui/config"
import { Link, useNavigate } from "react-router-dom"
import { signupSchema } from "../validation/schema"
import type { SignupInput } from "../validation/schema";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(false)

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
  
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
  
    // ✅ Validate with Zod
    const result = signupSchema.safeParse({ username, password });
  
    if (!result.success) {
      alert(result.error.issues.map(err => err.message).join("\n"));
      return;
    }
  
    try {
      setDisabled(true);
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, result.data as SignupInput);
      if(response)
      alert(" You are signed UP!");
      navigate("/login");
    } catch (err: any) {
      console.error(err);
      if (err.response?.data?.errors) {
        alert("⚠️ " + JSON.stringify(err.response.data.errors));
      } else {
        alert("Signup failed!");
      }
    } finally {
      setDisabled(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#D0E3F3] via-[#B8D4F0] to-[#DA82C8] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e4229d]/20 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#062A55]/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/15 rounded-full blur-sm animate-bounce"></div>
      </div>

      {/* Heading */}
      <div className="text-4xl sm:text-5xl md:text-5xl flex justify-center font-bold font-serif py-8 sm:py-10 md:py-10 tracking-tighter bg-gradient-to-r from-[#062A55] via-[#e4229d] to-[#062A55] bg-clip-text text-transparent text-center relative z-10 animate-fade-in">
        Welcome To SecondBrain
      </div>

      {/* Card */}
      <div className="flex justify-center w-full max-w-md relative z-10">
        <div className="rounded-[50px] sm:rounded-[60px] md:rounded-[60px] bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 sm:p-8 w-full transform hover:scale-[1.02] transition-all duration-300 ease-out">
          {/* Title */}
          <div className="flex justify-center text-[#062A55] font-semibold text-2xl sm:text-2xl font-serif mb-6 relative">
            <span className="relative z-10">SignUp</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e4229d]/10 to-transparent blur-sm"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="flex flex-col gap-8 sm:gap-10 md:gap-10 px-2 sm:px-4 md:px-6">
            {/* Username */}
            <div className="group">
              <div className="font-semibold tracking-tighter text-lg sm:text-xl font-serif text-[#062A55] px-2 mb-2 group-focus-within:text-[#e4229d] transition-colors duration-200">
                Username:
              </div>
              <div className="relative">
                <Input
                  variants="primary"
                  ref={usernameRef}
                  placeholder="Username"
                  // className="transition-all duration-200 focus:ring-2 focus:ring-[#e4229d]/50 focus:border-[#e4229d]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <div className="font-semibold tracking-tighter text-lg sm:text-xl font-serif text-[#062A55] px-2 mb-2 group-focus-within:text-[#e4229d] transition-colors duration-200">
                Password:
              </div>
              <div className="relative">
                <Input
                  variants="primary"
                  ref={passwordRef}
                  placeholder="Password"
                  // type="password"
                  // className="transition-all duration-200 focus:ring-2 focus:ring-[#e4229d]/50 focus:border-[#e4229d]"
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <div className="relative w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e4229d] to-[#062A55] rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
                <Button
                  variants="primary3"
                  text="SignUp"
                  size="md"
                  fullwidth={true}
                  loading={disabled}
                />
              </div>
            </div>

            {/* Login link */}
            <div className="text-center text-sm sm:text-base md:text-lg mt-[-20px] sm:mt-[-28px] md:mt-[-34px]">
              <span className="text-[#062A55]/80">Already have an account?</span>{" "}
              <Link
                className="text-[#062A55] font-semibold hover:text-[#e4229d] transition-colors duration-200 relative group"
                to="/login"
              >
                Login
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e4229d] group-hover:w-full transition-all duration-200"></span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
