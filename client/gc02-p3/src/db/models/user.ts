import { database } from "../config";
import { compareSync, hashSync } from "bcryptjs";
import { z } from "zod";
import {sign} from "jsonwebtoken"
import { HttpError } from "@/lib/error";

type RegisterType = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type LoginType = {
  email: string;
  password: string;
};


const RegisterSchema = z.object({
  name: z.string(),
  username: z.string().min(1, { message: "Username is required" }),
  email: z
    .string()
    .email({ message: "Invalid Email format" })
    .min(1, "Email is required"),
  password: z.string().min(5, { message: "Password minimun length is 5" }),
});

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email format" }).min(1,"Email is required"),
  password: z.string().min(1, { message: "Password is required" }),
});
export class User {
  static db = database.collection<RegisterType>("Users");

  static async validateUniqe(username: string, email: string) {
    const byEmail = await this.db.findOne({ email });
    const byUsername = await this.db.findOne({ username });

    return { byEmail, byUsername };
  }

  static async register(body: RegisterType) {
    // console.log(body,"aaaa")
    RegisterSchema.parse(body);
    const { byEmail, byUsername } = await this.validateUniqe(
      body.username,
      body.email
    );
    if (byEmail) {
      throw new HttpError("User with that Email already exist",400);
    }
    if (byUsername) {
      throw new HttpError("User with that Username already exist",400);
    }
    body.password = await hashSync(body.password, 10);

    await this.db.insertOne(body);
  }

  static async login(body:LoginType){
    LoginSchema.parse(body);

    const { byEmail:user } = await this.validateUniqe("a",body.email);
    if (!user) {
      throw new HttpError("Invalid Username/Password",400);
    }

    const isValid = compareSync(body.password,user.password)
    if (!isValid) {
      throw new HttpError("Invalid Username/Password",400);
    }

    const token = sign({id:user._id},process.env.JWT_SECRET as string)
    
    return token
  }
}
