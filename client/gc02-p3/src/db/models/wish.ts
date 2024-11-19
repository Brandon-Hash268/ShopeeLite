import { ObjectId } from "mongodb";
import { database } from "../config";

export class Wish {
  static db = database.collection("Wishes");

  static async create(productId: { productId: string }) {
    const wish = {
      userId: new ObjectId("673c6b379e7622f483208217"),
      productId: new ObjectId(String(productId.productId)),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await this.db.insertOne(wish);

    // return products;
  }

  static async findAll() {
    const userId = "673c6b379e7622f483208217"; // Example userId to filter by

    const results = await this.db.aggregate([
      // Match stage to filter by userId
      {
        $match: {
          userId: userId,
        },
      },

      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "products",
        },
      },
      {
        $unwind: "$products",
      },
    ]);
    console.log(result)
    return results; // Return the aggregation results
  }
}
