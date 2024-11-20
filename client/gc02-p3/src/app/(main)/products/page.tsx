"use client";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { product } from "@/type";

export default async function page() {
    const response = await fetch("http://localhost:3000/apis/products");
    const products = await response.json();
  return (
    <div>
      <div className="mt-6 mx-auto container">
        <SearchBar />

        <div className="flex flex-wrap my-10 gap-4 gap-y-[30px] justify-center content-center">
          {products.map((product: product, i: number) => (
            <div key={i}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
