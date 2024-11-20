import Image from "next/image";
import banner from "@/images/shopeeBanner.jpg";


export function Banner() {

  return (
    <>
      <div style={{ position: "relative", width: "950px", overflow: "hidden" }}>
        {/* Display Current Image */}
        <Image
          src={banner}
          alt="Banner"
          style={{ width: "100%", transition: "transform 0.5s ease" }}
        />
      </div>
    </>
  );
}
