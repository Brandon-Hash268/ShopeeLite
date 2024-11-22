import { Product } from "@/db/models/products";
import { HttpError } from "@/lib/error";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || undefined;
  const page = parseInt(searchParams.get("page")||"1",10);

  if (page) {
    const products = await Product.findAll({ search, page });
    return Response.json(products);
  }else{
    throw new HttpError("Page is required",400)
  }
  
}
