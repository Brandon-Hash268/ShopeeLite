import { Product } from "@/db/models/products";

export async function POST(request:Request) {
  const products = await Product.findAll();

  return Response.json(products);
}
