"use server";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export async function revalidateByTag(tag: string) {
  revalidateTag(tag);
}

export async function getDetailProduct(slug: string) {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/apis/products/detail",
      { params: { slug: slug } }
    );
    return data;
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

export async function logoutAction() {
    // cookies().delete("Authorization");
    redirect("/");
}
