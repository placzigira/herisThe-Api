const cloudinary= require('cloudinary') 
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
    cloudName:process.env.CLOUD_NAME,
    apiKey: process.env.CLOUD_KEY,
    apiSecret: process.env.CLOUD_KEY_SECRET
})
module.exports= cloudinary