"use client";

import axios from "axios";
// import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export function RemoveWishList({
  productId,
  fetchData,
}: {
  productId: string;
  fetchData: ()=>void;
}) {
  // const router = useRouter();
  const handleDelete = async () => {
    try {
      console.log(productId);
      await axios.delete("http://localhost:3000/apis/wishlists", {
        data: { productId },
      });
      Swal.fire({
        icon: "success",
        title: "Successfull",
        text: "Product removed from Wish list",
      });
      // revalidateByTag("wishlist");
      // router.push("/wishlist");
      fetchData()
    } catch (error) {
      console.log(error);

      if (axios.isAxiosError(error) && error.response) {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.response.data.message || "An error occurred.",
        });
      }
    }
  };
  return (
    <div className="absolute top-2 right-3" onClick={handleDelete}>
      <i className="fa-solid fa-trash text-lg cursor-pointer"></i>
    </div>
  );
}
