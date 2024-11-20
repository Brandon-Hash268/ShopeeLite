"use client";
import { WishListProduct } from "@/components/WishlistProductCard";
import { product, wishCard } from "@/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const router = useRouter()
  const [data, setData] = useState<wishCard[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/apis/wishlists");
      console.log(data, "dataaaaaaaa");

      setData(data);
    } catch (error) {
      console.log("🚀 ~ fetchData ~ error:", error);
      if (axios.isAxiosError(error) && error.response) {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.response.data.message || "An error occurred.",
        });
        router.push("/")
      }
    }
  };

  useEffect(() => {
    console.log("testtttttttttt");

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center content-center mt-4">
        <h1 className="text-4xl text-shopee font-semibold">Wish List</h1>
      </div>

      <div className="flex flex-wrap my-10 gap-4 gap-y-[48px] justify-center content-center">
        {data.map((wishItem: wishCard) =>
          // Here we map over the products array inside each wish card
          wishItem.products.map((product: product, i: number) => (
            <div key={i}>
              <WishListProduct product={product} fetchData={fetchData} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
