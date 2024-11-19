"use client";

import { MainNavbar } from "@/components/mainNavbar";
import { useState } from "react";

export default function page() {
  const [like, setLike] = useState(false);
  return (
    <>
      <MainNavbar />
      <div className="justify-center content-center flex mt-40">
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
        <div className="card lg:card-side bg-base-100 shadow-xl w-[900px] h-72">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>

            <div className="card-actions justify-end">
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (like) {
                      setLike(false);
                    } else {
                      setLike(true);
                    }
                  }}
                >
                  <i
                    className={
                      like ? "fa-solid fa-heart" : "fa-regular fa-heart"
                    }
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
