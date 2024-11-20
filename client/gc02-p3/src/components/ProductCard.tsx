"use client";

import { product } from "@/type";
import { WishList } from "./WishList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Rp } from "@/helpers/currency";

export function ProductCard({ product }: { product: product }) {
  const router = useRouter()
  const handleDetail =()=>{
   router.push("/products/"+product.slug)
  }
  return (
    <div
      className="card bg-base-100 shadow-xl relative flex flex-col justify-between"
      style={{ width: "280px", height: "430px" }}
    >
      <figure className="relative h-1/2">
        <Image
          src={product.thumbnail}
          alt={product.name}
          className="object-cover w-full h-full cursor-pointer"
          width={400}
          height={500}
          onClick={handleDetail}
        />
        {/* Heart icon */}
        <WishList productId={product._id} />
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title truncate">{product.name}</h2>
        <p className="text-sm text-gray-500 overflow-hidden text-ellipsis mb-auto">
          {product.excerpt}
        </p>
          <p className="text-sm text-gray-500 overflow-hidden text-ellipsis mb-auto">
           {Rp(product.price)}
        </p>
        <div className="card-actions flex-wrap justify-end mt-2">
          {product.tags.map((tag: string, i: number) => (
            <div key={i} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
