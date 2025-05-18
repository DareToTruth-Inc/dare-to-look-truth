// emailSaver.js

import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';


const dbName = 'Dare_To_Truth';
const collectionName = 'websitesignups'; 

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const uri = "mongodb+srv://sunxuan:kizunaai@cluster0.h6ecibg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  if (!uri) throw new Error('Missing MONGODB_URI env variable');

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const data = req.body;

    if (!data || !data.email) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return res.status(200).json({ message: 'Saved to MongoDB', insertedId: result.insertedId });
  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
