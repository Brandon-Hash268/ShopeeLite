import Image from "next/image";
import logo from "./images/1656181621shopee-logo-white.png";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/Footer";
import { FeaturedCard } from "@/components/FeaturedCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="navbar bg-shopee">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image src={logo} alt="logo" width={130} />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto rounded-md px-2"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src="/images/default-avatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex mt-4 justify-center content-center">
        <Banner />
      </div>

      <div
        className="my-10 card bg-base-100 mx-auto p-5"
        style={{
          width: "70%",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)", // Uniform shadow around the div
          borderRadius: "8px",
        }}
      >
        <div className="flex justify-between">

        <h1 className="text-xl font-bold mb-4">Newest Item!</h1>
        <Link href="#">
        <h1 className="text-xl font-bold mb-4">See All -{">"}</h1>
        </Link>
        </div>
        <div
          className="flex gap-3 justify-start items-center overflow-x-auto px-3 py-2"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
