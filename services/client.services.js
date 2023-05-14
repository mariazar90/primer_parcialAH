import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");
const projectClient = db.collection("Cliente");

async function getClient(section) {
  await client.connect();
  projectClient.findOne({ section: section });
}

async function createClient(section, client) {
  await client.connect();

  projectClient.insertOne({ section });
}

export { getClient, createClient };
