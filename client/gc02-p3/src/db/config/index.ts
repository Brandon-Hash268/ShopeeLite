import { MongoClient, ServerApiVersion } from "mongodb"
const uri =
  "mongodb+srv://brandonvincentius54321:sX4j5xCL3UFTmxCw@rmt54.wxnng.mongodb.net/?retryWrites=true&w=majority&appName=RMT54";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const database = client.db("gc02-p3");
