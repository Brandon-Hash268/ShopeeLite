"use client";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { product } from "@/type";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/apis/products");
    const products = await response.json();
    setProducts(products);
  };

  useEffect(() => {
    fetchData();
  }, []);
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
