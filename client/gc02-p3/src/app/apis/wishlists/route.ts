import { Wish } from "@/db/models/wish";
import { NextRequest } from "next/server";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();
    const userId = request.headers.get("x-user-id");
      // console.log(productId);

    await Wish.create(productId, userId as string);

    return Response.json({ message: "Added to wish list successfully" });
  } catch (error) {
    // console.log(error.issues[0].message);
    if (error instanceof ZodError) {
      return new Response(
        JSON.stringify({ message: error.issues[0].message }),
        { status: 400 } // Bad Request
      );
    } else if (error instanceof Error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    }
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const {productId} = await request.json();
    const userId = request.headers.get("x-user-id");

    //   console.log("aaaaaaaaaa");

    await Wish.destroy(productId,userId as string);

    return Response.json({ message: "Deleted from wish list successfully" });
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

export async function GET() {
  try {
    const wish = await Wish.findAll();
    // console.log(wish[0].products,"productssssssssssss");

    return Response.json(wish);
  } catch (error) {
    // console.log("🚀 ~ GET ~ error:", error);
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
