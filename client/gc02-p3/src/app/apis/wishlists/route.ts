import { Wish } from "@/db/models/wish";
import { handlError, HttpError } from "@/lib/error";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();
    const userId = request.headers.get("x-user-id");
    console.log(userId);

    await Wish.create(productId, userId as string);

    return Response.json({ message: "Added to wish list successfully" });
  } catch (error) {
    return handlError(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { productId } = await request.json();
    const userId = request.headers.get("x-user-id");

    await Wish.destroy(productId, userId as string);

    return Response.json({ message: "Deleted from wish list successfully" });
  } catch (error) {
    return handlError(error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (userId) {
      const wish = await Wish.findAll(userId);
      return Response.json(wish);
    }else{
      throw new HttpError("User Id is required",401)
    }
    
  } catch (error) {
    return handlError(error);
  }
}
