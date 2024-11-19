"use sever";

import { product } from "@/type";

export async function FeaturedCard({ product }: { product: product }) {
  return (
    <div
      className="card bg-base-100 shadow-xl relative flex flex-col justify-between"
      style={{ width: "280px", height: "380px" }} // Fixed size for all cards
    >
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        rel="stylesheet"
      />
      <figure className="relative h-1/2">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title truncate">{product.name}</h2>
        <p className="text-sm text-gray-500 overflow-hidden text-ellipsis mb-auto">
          {product.excerpt}
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
