"use client";
import { SearchBar } from "@/components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import {InfinitePage} from "@/components/InfiteScroll"

export default function Page() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSearch = (term: string) => {
    setSearch(term);
    setPage(1);
    // console.log(search);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/apis/products", {
        params: { search: search, page: page },
      });
      setProducts(page === 1 ? data : [...products, ...data]);
      setHasMore(data.length > 0)
    };
    fetchData();
  }, [search, page]);

  return (
    <div>
      <div className="mt-6 mx-auto container">
        <SearchBar handleSearch={handleSearch} />

          <InfinitePage setPage={setPage} hasMore={hasMore} products={products}/>
        </div>
      </div>
  );
}
