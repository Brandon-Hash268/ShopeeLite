import { ObjectId } from "mongodb";
import { database } from "../config";
import { HttpError } from "@/lib/error";

export class Wish {
  static db = database.collection("Wishes");

  static async create(productId:string,userId:string) {
      const idUser = new ObjectId(userId)
      const idProduct = new ObjectId(productId)

      const Exist = await this.db.findOne({userId:idUser,productId:idProduct})
      if (Exist) {
        throw new HttpError("You've Wishlisted this product",400)
      }

    const wish = {
      userId: new ObjectId(idUser),
      productId: new ObjectId(idProduct),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await this.db.insertOne(wish);

    // return products;
  }

  static async destroy(productId:string,userId:string) {
    const wish = {
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
    };

    await this.db.deleteOne(wish);
    // return products;
  }

  static async findAll() {
    const userId = new ObjectId("673c6b379e7622f483208217"); // Example userId to filter by

    const results = await this.db
      .aggregate([
        // Match stage to filter by userId
        {
          $match: {
            userId: userId,
          },
        },
        {
          $lookup: {
            from: "Products",
            localField: "productId",
            foreignField: "_id",
            as: "products",
          },
        },
        // {
        //   $unwind:"$products"
        // }
      ])
      .toArray();
    // console.log(results[0],"aaaaaaaaaa")
    return results; // Return the aggregation results
  }
}
