"use client";
import { MainNavbar } from "@/components/mainNavbar";
import { WishListProduct } from "@/components/WishlistProductCard";

export default function page() {
  return (
    <div>
      <MainNavbar />
      <div className="flex justify-center content-center mt-4">
        <h1 className="text-4xl text-shopee font-semibold">Wish List</h1>
      </div>

      <div className="flex flex-wrap my-10 gap-4 gap-y-[48px] justify-center content-center">
        <div className="w-64 h-80">
          <WishListProduct />
        </div>
        <div className="w-64 h-80">
          <WishListProduct />
        </div>
        <div className="w-64 h-80">
          <WishListProduct />
        </div>
        <div className="w-64 h-80">
          <WishListProduct />
        </div>
        <div className="w-64 h-80">
          <WishListProduct />
        </div>
        <div className="w-64 h-80">
          <WishListProduct />
        </div>
      </div>
    </div>
  );
}
