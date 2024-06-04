"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Make sure the import is correct for your setup
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa"; // These are icon components from react-icons
import Image from "next/image";

export interface LoginFormProps {
  title?: string;
  isDemo?: boolean;
  theme?: string;
}

const Login = ({ title, isDemo, theme }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const staticEmail = "demo@example.com";
  const staticPassword = "demo123";

  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === staticEmail && password === staticPassword) {
      router.push("/dashboard");
    } else {
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-4xl w-full gap-10 overflow-hidden h-96">
      <form
        className="flex flex-col p-10 w-full md:w-1/2"
        onSubmit={handleLogin}
      >
        <div className="flex flex-row items-center w-full gap-2 mb-4">
          <p
            className="text-2xl font-bold text-center md:text-left"
            style={{ color: "#0A1D35" }}
          >
            {title ? title : "User Panel Login"}
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-full">
            <input
              id="email"
              type="email"
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full relative">
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="flex flex-row gap-2 items-center justify-center w-full bg-[#6fabf4] hover:bg-[#3D92F9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
            <FaArrowRight />
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-600 text-sm mt-4 text-center">
            {errorMessage}
          </p>
        )}

        {isDemo && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Use the following credentials for demo access:
            </p>
            <p className="text-sm text-gray-600 font-bold">
              Email: {staticEmail}
            </p>
            <p className="text-sm text-gray-600 font-bold">
              Password: {staticPassword}
            </p>
          </div>
        )}
      </form>
      <div
        className="w-full md:w-1/2 bg-cover bg-no-repeat bg-center rounded-lg"
        style={{
          backgroundImage: `url('/xaver-login.png')`,
          backgroundSize: "contain",
          backgroundColor: "#ECF5FC",
        }}
      ></div>
    </div>
  );
};

export default Login;
