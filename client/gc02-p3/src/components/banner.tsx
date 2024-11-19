"use client";
import Image from "next/image";
import banner from "../app/images/shopeeBanner.jpg";
import banner2 from "../app/images/banner2.jpg";
import { useState } from "react";

export function Banner() {
  const [index,setIndex] = useState(0)
  const banners = [banner, banner2];

  const handleBanner = ()=>{
    if (index == 0) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }

  return (
    <>
      <div style={{ position: "relative", width: "950px", overflow: "hidden" }}>
        {/* Display Current Image */}
        <Image
          src={banners[index]}
          alt={`Slide ${index + 1}`}
          style={{ width: "100%", transition: "transform 0.5s ease" }}
        />

        {/* Navigation Buttons */}
        <button
          onClick={handleBanner}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          &#8249; {/* Left arrow */}
        </button>

        <button
          onClick={handleBanner}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          &#8250; {/* Right arrow */}
        </button>
      </div>
    </>
  );
}
