"use client";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { product } from "@/type";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")
  

  
  const handleSearch = (term:string)=>{
    setSearch(term)
    console.log(search);
    
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("http://localhost:3000/apis/products",{params:{search:search}});
      setProducts(data);
    };
    fetchData();
  }, [search]);

  return (
    <div>
      <div className="mt-6 mx-auto container">
        <SearchBar handleSearch={handleSearch} />

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
