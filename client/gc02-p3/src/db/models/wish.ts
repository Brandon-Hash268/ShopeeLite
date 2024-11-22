import { ObjectId } from "mongodb";
import { database } from "../config";
import { HttpError } from "@/lib/error";
import { z } from "zod";

const wishListSchema = z.object({
  userId: z
    .string()
    .min(1, "User Id is required"),
  productId: z.string().min(1, { message: "Product Id is required" }),
});
export class Wish {
  static db = database.collection("Wishes");

  static async create(productId: string, userId: string) {
    console.log(userId,"userId");
    
    const idUser = new ObjectId(userId);
    const idProduct = new ObjectId(productId);
    const wishSchema = { userId,productId}

    wishListSchema.parse(wishSchema)

    const Exist = await this.db.findOne({
      userId: idUser,
      productId: idProduct,
    });

    if (Exist) {
      throw new HttpError("You've Wishlisted this product", 400);
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

  static async destroy(productId: string, userId: string) {
    const wish = {
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
    };

    wishListSchema.parse({productId,userId});

    await this.db.deleteOne(wish);
    // return products;
  }

  static async findAll(userId:string) {
    const results = await this.db
      .aggregate([
        // Match stage to filter by userId
        {
          $match: {
            userId: new ObjectId(userId),
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
