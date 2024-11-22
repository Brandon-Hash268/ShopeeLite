import { Product } from "@/db/models/products";
import { HttpError } from "@/lib/error";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  // console.log(slug,"sluggggggg");

  if (slug) {
    const products = await Product.findDetail({ slug });
    return Response.json(products);
  } else {
    throw new HttpError("Slug is required", 400);
  }
}
