import { User } from "@/db/models/user";
import { handlError } from "@/lib/error";
import { cookies } from "next/headers";

export async function POST(request:Request) {
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
