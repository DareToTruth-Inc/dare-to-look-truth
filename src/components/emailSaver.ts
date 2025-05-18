import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = 'Dare_To_Truth'; 
const collectionName = 'websitesignups'; // 集合名

let cachedClient: MongoClient | null = null;

async function connectToMongo() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const formData = req.body;

    if (!formData.email) {
      return res.status(400).json({ error: 'Missing email field' });
    }

    const result = await collection.insertOne({
      ...formData,
      submittedAt: new Date(),
    });

    return res.status(200).json({ message: 'Saved to MongoDB', id: result.insertedId });
  } catch (error) {
    console.error('[MongoDB error]', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
