import { Product } from "@/db/models/products";

type paramsType = {
  params: {
    slug: string;
  };
};

export async function GET({ params }: paramsType) {
  const { slug } = params;
  const products = await Product.findDetail({slug});

  return Response.json(products);
}
