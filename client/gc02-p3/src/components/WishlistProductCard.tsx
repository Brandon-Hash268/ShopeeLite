"use client";

import { RemoveWishList } from "./RemoveWishList";

export async function WishListProduct() {
  return (
    <div className="card bg-base-100 w-auto shadow-xl relative">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        rel="stylesheet"
      />
      <figure className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        {/* Heart icon */}
        <RemoveWishList />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate">
          Shoes! <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-sm text-gray-500 overflow-hidden text-ellipsis">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
