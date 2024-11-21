'use client'
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductCard } from "./ProductCard";
import { product } from "@/type";

type InfinitePageProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasMore: boolean;
  products: product[];
};

export function InfinitePage({ setPage, hasMore, products }:InfinitePageProps) {
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={() => setPage((prev:number) => prev + 1)}
      hasMore={hasMore}
      loader={
        <div className="flex items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>No more Products to render</b>
        </p>
      }
    >
      <div className="flex flex-wrap my-10 gap-4 gap-y-[30px] justify-center content-center">
        {products.map((product: product, i: number) => (
          <div key={i}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}