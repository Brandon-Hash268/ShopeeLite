import { User } from "@/db/models/user";
import { cookies } from "next/headers";
import { ZodError } from "zod";

export async function POST(request:Request) {
   try {
     const body = await request.json();

     const token = await User.login(body);
    //  console.log(token,"token");
     
     cookies().set("Authorization",token)
     return Response.json(token);
   } catch (error) {
     // console.log(error.issues[0].message);
     if (error instanceof ZodError) {
       return new Response(
         JSON.stringify({ message: error.issues[0].message }),
         { status: 400 } // Bad Request
       );
     } else if (error instanceof Error) {
       return new Response(
         JSON.stringify({ message: error.message }),
         { status: 400 } // Bad Request
       );
     }
   }
}
