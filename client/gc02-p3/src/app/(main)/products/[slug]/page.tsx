"use server";

import { WishList } from "@/components/WishList";
import { Rp } from "@/helpers/currency";
import axios from "axios";
import Image from "next/image";

type props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: props) {
  let product;
  try {
    const { data } = await axios.get(
      "http://localhost:3000/apis/products/detail",
      { params: { slug: params.slug } }
    );
    product = data;
  } catch (error) {
    console.log("🚀 ~ Page ~ error:", error);
  }

  //   const [like, setLike] = useState(false);
  return (
    <>
      <div className="justify-center content-center flex my-5">
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-[900px]">
          <figure>
            <img
              src={product.thumbnail}
              alt="Album"
              className="w-[400px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <div>
              <p className="text-sm">{Rp(product.price)}</p>
            </div>
            <div className="card-actions flex-wrap justify-start mt-2">
              {product.tags.map((tag: string, i: number) => (
                <div key={i} className="badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>
            <div className="card-actions flex-wrap justify-start mt-2">
              {product.images.map((image: string, i: number) => (
                <img src={image} alt="images" className="h-[100px]" />
              ))}
            </div>
            <div className="max-w-[500px]">
              <p className="text-sm">{product.description.slice(0, 200)}</p>
            </div>

            <div className="card-actions justify-end">
              <div>
                <button className="btn btn-primary">
                  <WishList productId={product._id}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
