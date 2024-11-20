import { database } from "../config";

export class Product{
    static db  = database.collection("Products")

    static async findAll(){
        const products = await this.db.find().sort("createdAt",-1).toArray()
        return products
    }

    static async findDetail({slug}:{slug:string}){
        const products = await this.db.findOne({slug})
        // console.log(products);
        
        return products
    }
}