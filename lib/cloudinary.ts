//lib/cloudnary.ts
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'du9tcut5k',
  api_key: process.env.CLOUDINARY_API_KEY || '627365284942593',
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImageToCloudinary(buffer: Buffer, filename?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'image',
          public_id: filename || undefined,
        },
        (error, result) => {
          if (error || !result) {
            reject(error || new Error('Cloudinary upload failed'));
          } else {
            resolve(result.secure_url);
          }
        }
      )
      .end(buffer);
  });
}
