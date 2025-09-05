const cloudinary = require('../config/cloudinary');

async function uploadImage(filePath, folder = 'alumni') {
  const res = await cloudinary.uploader.upload(filePath, { folder });
  return res;
}

async function removeImage(publicId) {
  return cloudinary.uploader.destroy(publicId);
}

module.exports = { uploadImage, removeImage };
