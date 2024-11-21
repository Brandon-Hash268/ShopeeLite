import { HttpError } from "@/lib/error";
import { database } from "../config";

export class Product {
  static db = database.collection("Products");

  static async findAll({ search }: { search?: string }) {
      if (search) {
        const regex = new RegExp(search, "i");
      const products = await this.db
        .aggregate([
          {
            $match: { name: { $regex: regex } },
          },
          {
            $sort:{"createdAt":-1}
          }
        ])
        .toArray();
      return products;
    } else {
      const products = await this.db.find().sort("createdAt", -1).toArray();
      return products;
    }
  }

  static async findDetail({ slug }: { slug: string }) {
    const products = await this.db.findOne({ slug });
    if (!products) {
      throw new HttpError("Product not Found",404)
    }
    // console.log(products);

    return products;
  }
}
