import Image from "next/image";
import shopeeBg from "../images/sg-11134004-7rdwu-m0vegyckoqxa00&quot.png";
import Link from "next/link";
import { ResgiterNavbar } from "../../components/navbar";

export default function Page() {
  return (
    <div>
      <ResgiterNavbar />

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
          <form className="space-y-4">
            {/* Username/Email Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full input input-bordered"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full input input-bordered"
              />
            </div>

            {/* Login Button */}
            <button className="w-full btn btn-primary bg-[#FA5526] hover:bg-[#D9431C] text-white font-bold py-2 rounded-md">
              Log In
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
