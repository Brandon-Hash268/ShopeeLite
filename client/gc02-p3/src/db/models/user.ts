import { database } from "../config";
import { compareSync, hashSync } from "bcryptjs";
import { z } from "zod";
import {sign} from "jsonwebtoken"

type RegisterType = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type LoginType = {
  username: string;
  password: string;
};


const RegisterSchema = z.object({
  name: z.string(),
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid Email format" }),
  password: z.string().min(5, { message: "Password minimun length is 5" }),
});
export class User {
  static JWT_SECRET = "qwerty"
  static db = database.collection<RegisterType>("Users");

  static async validateUniqe(username: string, email: string) {
    const byEmail = await this.db.findOne({ email });
    const byUsername = await this.db.findOne({ username });

    return { byEmail, byUsername };
  }

  static async register(body: RegisterType) {
    console.log(body,"aaaa")
    RegisterSchema.parse(body);
    const { byEmail, byUsername } = await this.validateUniqe(
      body.username,
      body.email
    );
    if (byEmail) {
      throw new Error("User with that Email already exist");
    }
    if (byUsername) {
      throw new Error("User with that Username already exist");
    }
    body.password = await hashSync(body.password, 10);

    await this.db.insertOne(body);
  }

  static async login(body:LoginType){
    const { byUsername:user } = await this.validateUniqe(body.username,"a");
    if (!user) {
      throw new Error("Invalid Username/Password");
    }

    const isValid = compareSync(body.password,user.password)
    if (!isValid) {
      throw new Error("Invalid Username/Password");
    }

    const token = sign({id:user._id},this.JWT_SECRET)
    
    return token
  }
}
