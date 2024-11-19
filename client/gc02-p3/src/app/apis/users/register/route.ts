import { User } from "@/db/models/user";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    console.log("aaa")
    const body = await request.json();

    await User.register(body);

    return Response.json({message:"Registered succesnfully"})
  } catch (error) {
    // console.log(error.issues[0].message);
    if (error instanceof ZodError) {
      return new Response(
        JSON.stringify({ message: error.issues[0].message }),
        { status: 400 } // Bad Request
      );
    }
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 400 } // Bad Request
    );
  }
}
