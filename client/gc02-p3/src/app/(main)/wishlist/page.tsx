"use client";
import { WishListProduct } from "@/components/WishlistProductCard";
import { product, wishCard } from "@/type";

export default async function page() {
  const response = await fetch("http://localhost:3000/apis/wishlists",{method:"GET"});
  const wish = await response.json();

  console.log(wish);
  
  
  
  return (
    <div>
      <div className="flex justify-center content-center mt-4">
        <h1 className="text-4xl text-shopee font-semibold">Wish List</h1>
      </div>

      <div className="flex flex-wrap my-10 gap-4 gap-y-[48px] justify-center content-center">
        {wish.map((wishItem:wishCard[]) =>
          // Here we map over the products array inside each wish card
          wishItem.products.map((product:product, i:number) => (
            <div key={i}>
              <WishListProduct product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
