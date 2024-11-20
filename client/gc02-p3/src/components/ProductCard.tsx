"use client";

import { product } from "@/type";
import { WishList } from "./WishList";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";

export function ProductCard({ product }: { product: product }) {
  const handleDetail =async()=>{
    try {
      await axios.get("http://localhost:3000/apis/products/"+product.slug);
      
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.response.data.message || "An error occurred.",
        });
      }
    }
  }
  return (
    <div
      className="card bg-base-100 shadow-xl relative flex flex-col justify-between"
      style={{ width: "280px", height: "430px" }}
    >
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        rel="stylesheet"
      />
      <figure className="relative h-1/2">
        <Image
          src={product.thumbnail}
          alt={product.name}
          className="object-cover w-full h-full"
          width={400}
          height={400}
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
          <p className="text-sm text-gray-500 overflow-hidden text-ellipsis mb-auto">
            Rp {new Intl.NumberFormat("id-ID").format(product.price)}
          </p>
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
