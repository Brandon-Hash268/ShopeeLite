"use client";

import Image from "next/image";
import shopeeBg from "@/images/sg-11134004-7rdwu-m0vegyckoqxa00&quot.png";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2"
import { useRouter } from "next/navigation";
import axios from "axios"

export default function Page() {
  const router = useRouter()
  const [user, setUser] = useState({
    name: "orang",
    username: "orang",
    email: "orang@email.com",
    password: "orang",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/apis/users/register",user);

      // console.log("Registration successful!");
      router.push("/login");
    } catch (error) {
     if (axios.isAxiosError(error) && error.response) {
       Swal.fire({
         icon: "error",
         title: "Registration Failed",
         text: error.response.data.message || "An error occurred.",
       });
     }
    }
  };

  return (
    <div className="bg-shopee h-[800px]">
      <div className="flex justify-center content-center bg-shopee h-screen pt-20 ">
        <div>
          <Image
            src={shopeeBg}
            alt="shopee"
            width={600}
            height={400} // Adjusted height to be more visible
            objectFit="cover"
          />
        </div>
        {/* Form Container */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[590px]">
          <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full input input-bordered"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            {/* Username Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full input input-bordered"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full input input-bordered"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full input input-bordered"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full btn btn-primary bg-[#FA5526] hover:bg-[#D9431C] text-white font-bold py-2 rounded-md"
            >
              Register
            </button>
          </form>

          <p className="text-gray-600 text-sm mt-6 text-center">
            Have an Account?{" "}
            <Link
              href="/login"
              className="text-[#FA5526] font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
