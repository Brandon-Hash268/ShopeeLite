import { User } from "@/db/models/user";
import { handlError } from "@/lib/error";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest) {
   try {
     const body = await request.json();

     const token = await User.login(body);
    //  console.log(token,"token");
     
     cookies().set("Authorization",`Bearer ${token}`)
     return Response.json(token);
   } catch (error) {
    //  console.log("🚀 ~ POST ~ error:", error)
     return handlError(error)
   }
}
