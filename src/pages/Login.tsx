import { useRef, useState } from "react";
import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../component/ui/config";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen w-full bg-gradient-to-b from-[#D0E3F3] to-[#DA82C8] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <div className="text-4xl sm:text-5xl md:text-5xl flex justify-center font-bold font-serif py-8 sm:py-10 md:py-10 tracking-tighter bg-gradient-to-r from-[#062A55] to-[#e4229d]  bg-clip-text text-transparent text-center">
        Welcome Back!
      </div>

      {/* Card */}
      <div className="flex justify-center w-full max-w-md">
        <div className="rounded-[50px] sm:rounded-[60px] md:rounded-[60px] bg-white/30 backdrop-blur-lg p-8 sm:p-8 w-full">
          {/* Title */}
          <div className="flex justify-center text-[#062A55] font-semibold text-2xl sm:text-2xl font-serif mb-6">
            LogIn
          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-8 sm:gap-10 md:gap-10 px-2 sm:px-4 md:px-6"
          >
            {/* Username */}
            <div>
              <div className="font-semibold tracking-tighter text-lg sm:text-xl font-serif text-[#062A55] px-2">
                Username:
              </div>
              <Input
                variants="primary"
                ref={usernameRef}
                placeholder="Username"
              />
            </div>

            {/* Password */}
            <div>
              <div className="font-semibold tracking-tighter text-lg sm:text-xl font-serif text-[#062A55] px-2">
                Password:
              </div>
              <Input
                variants="primary"
                ref={passwordRef}
                placeholder="Password"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Button
                variants="primary"
                text="LogIn"
                size="md"
                fullwidth={true}
                loading={disabled}
              />
            </div>

            {/* Signup link */}
            <div className="text-center text-sm sm:text-base md:text-lg mt-[-20px] sm:mt-[-28px] md:mt-[-34px]">
              New user? Register here:{" "}
              <Link
                className="text-[#062A55] font-semibold"
                to="/Signup"
              >
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
