import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadToCloudinary = async (file) => {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
        resource_type: 'auto',
        folder: 'reviews'
      }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }).end(buffer);
    });
    
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return null;
  }
};