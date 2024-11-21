import { HttpError } from "@/lib/error";
import { database } from "../config";

export class Product {
  static db = database.collection("Products");

  static async findAll({ search, page }: { search?: string; page: number }) {
    const itemPerPage = 8;
    let query = {};
    if (search) {
      const regex = new RegExp(search, "i");
      query = { name: { $regex: regex } };
    }
    const products = await this.db
      .find(query)
      .skip((page - 1) * itemPerPage)
      .sort({ createdAt: -1 })
      .limit(itemPerPage)
      .toArray();
    return products;
  }

  static async findDetail({ slug }: { slug: string }) {
    const products = await this.db.findOne({ slug });
    if (!products) {
      throw new HttpError("Product not Found", 404);
    }
    // console.log(products);

    return products;
  }
}
