import { Product } from "@/db/models/products";

export async function GET() {
    const products = await Product.findAll()

    return Response.json(products)
}