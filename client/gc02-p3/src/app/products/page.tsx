'use client'
import { FeaturedCard } from "@/components/FeaturedCard";
import { MainNavbar } from "@/components/mainNavbar";
import { SearchBar } from "@/components/SearchBar";

export default function page() {
  return (
    <div>
      <MainNavbar />
      <div className="mt-6 mx-auto container">
        
        <SearchBar/>

        <div className="flex flex-wrap my-10 gap-4 gap-y-[48px] justify-center content-center">
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
          <div className="w-64 h-80">
            <FeaturedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
