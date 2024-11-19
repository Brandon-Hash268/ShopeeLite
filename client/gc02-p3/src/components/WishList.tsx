'use client'
import axios from "axios";
import Swal from "sweetalert2";

export function WishList({ productId }: { productId: string }) {
  const handleWish = async()=>{
    try {
      console.log(productId);
      await axios.post("http://localhost:3000/apis/wishlists",{productId});
      Swal.fire({
        icon:"success",
        title:"Successfull",
        text:"Product added to Wish list"
      })
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
  }
  return (
    <div className="absolute top-2 right-3" onClick={handleWish}>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        rel="stylesheet"
      />
      <i className="fa-regular fa-heart text-lg cursor-pointer text-pink-500"></i>
    </div>
  );
}