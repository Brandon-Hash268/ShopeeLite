import Image from "next/image";
import shopeeBg from "../images/sg-11134004-7rdwu-m0vegyckoqxa00&quot.png";
import logo from "../images/image.png"
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"><Image src={logo} alt="logo" width={130} style={{background:"none"}}/></a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

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
            <Link href="/login" className="text-[#FA5526] font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
