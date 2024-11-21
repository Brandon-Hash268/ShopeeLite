"use client";
import Image from "next/image";
import shopeeBg from "@/images/sg-11134004-7rdwu-m0vegyckoqxa00&quot.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(user);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(user);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/apis/users/login`,
        user
      );

      router.push("/");
      window.location.reload();
    } catch (error) {
      // console.log("🚀 ~ handleSubmit ~ error:", error)
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
    <div>
      {/* <ResgiterNavbar /> */}

      <div className="flex justify-center content-center bg-shopee h-screen pt-20 ">
        <div>
          <Image
            src={shopeeBg}
            alt="shopee"
            width={600}
            height={10}
            objectFit="cover"
          />
        </div>
        {/* Form Container */}

        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[450px]">
          <h1 className="text-2xl font-bold text-center mb-6">Log in</h1>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>

          <p className="text-gray-600 text-sm mt-6 text-center">
            New to Shopee?{" "}
            <Link
              href="/register"
              className="text-[#FA5526] font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
