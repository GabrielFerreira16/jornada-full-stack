//javaScript Assincrono
//await async

import { MongoClient } from "mongodb";

const URI = 
"mongodb+srv://domontegabrielferreira:Gb29@cluster0.wgg88.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection('songs').find({}).toArray();
