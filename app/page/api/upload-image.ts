import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { image } = req.body; // image should be base64 or file url

  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    const timestamp = Math.floor(Date.now() / 1000);
    const signature = "prashant" // generate signature for secure upload (Cloudinary docs)

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'your_upload_preset');
    if (!apiKey) {
  throw new Error('Cloudinary API key is missing');
} // create unsigned preset in Cloudinary dashboard
    formData.append('api_key', apiKey);
    formData.append('timestamp', timestamp.toString());
    formData.append('signature', signature);

    const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    res.status(200).json({ url: response.data.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
}
