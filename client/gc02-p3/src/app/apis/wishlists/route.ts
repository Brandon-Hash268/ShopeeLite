import { Wish } from "@/db/models/wish";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
      const body = await request.json();
    //   console.log("aaaaaaaaaa");
    
    await Wish.create(body);

    return Response.json({ message: "Added to wish list succesnfully" });
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
export async function GET(request: Request) {
  try {
      const body = await request.json();
    //   console.log("aaaaaaaaaa");
    
    await Wish.create(body);

    return Response.json({ message: "Added to wish list succesnfully" });
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
