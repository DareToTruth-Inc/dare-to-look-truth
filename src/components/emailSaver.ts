import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = 'Dare_To_Truth';
const collectionName = 'websitesignups';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertOne({
      email,
      createdAt: new Date(),
    });

    res.status(200).json({ message: 'Saved', id: result.insertedId });
  } catch (err) {
    console.error('Mongo error:', err);
    res.status(500).json({ error: 'Failed to save email' });
  } finally {
    await client.close();
  }
}
