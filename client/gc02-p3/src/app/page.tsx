'use server'
import { Banner } from "@/components/banner";
import { Footer } from "@/components/Footer";
import { FeaturedCard } from "@/components/FeaturedCard";
import Link from "next/link";
import { MainNavbar } from "@/components/mainNavbar";

export default async function Home() {
  return (
    <div>
      <MainNavbar />

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
          <div className="w-64 h-80">
            <FeaturedCard />
          </div>
          <div className="w-64 h-80">
            <FeaturedCard />
          </div>
          <div className="w-64 h-80">
            <FeaturedCard />
          </div>
          <div className="w-64 h-80">
            <FeaturedCard />
          </div>
          <div className="w-64 h-80">
            <FeaturedCard />
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}
