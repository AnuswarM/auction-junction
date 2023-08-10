const cloudinary = require("cloudinary");
require("dotenv").config();

import image from "./images/auction1";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

try {
  const result = await cloudinary.v2.uploader.upload(image, {
    folder: "products",
  });

  console.log(result.public_id);
  console.log(result.url);
} catch (error) {
  console.log(error);
}
