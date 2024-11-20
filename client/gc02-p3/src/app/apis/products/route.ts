import { Product } from "@/db/models/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || undefined;

  const products = await Product.findAll({ search });
  return Response.json(products);
}
