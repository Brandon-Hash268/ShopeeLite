'use client'
import { MainNavbar } from "@/components/mainNavbar";
import { ProductCard } from "@/components/ProductCars";
import { SearchBar } from "@/components/SearchBar";

export default function page() {
  return (
    <div>
      <MainNavbar />
      <div className="mt-6 mx-auto container">
        <SearchBar />

        <div className="flex flex-wrap my-10 gap-4 gap-y-[48px] justify-center content-center">
          <div className="w-64 h-80">
            <ProductCard />
          </div>
          <div className="w-64 h-80">
            <ProductCard />
          </div>
          <div className="w-64 h-80">
            <ProductCard />
          </div>
          <div className="w-64 h-80">
            <ProductCard />
          </div>
          <div className="w-64 h-80">
            <ProductCard />
          </div>
          <div className="w-64 h-80">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
