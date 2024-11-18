import Image from "next/image";
import shopeeBg from "../images/sg-11134004-7rdwu-m0vegyckoqxa00&quot.png";
import logo from "../images/image.png"
import Link from "next/link";

export default function Page() {
  return (
    <div>


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

        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[590px]">
          <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

          {/* Form */}
          <form className="space-y-4">
            {/* Username/Email/Name Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full input input-bordered"
              />
            </div>
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
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
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
            Have an Account?{" "}
            <Link href="/login" className="text-[#FA5526] font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
