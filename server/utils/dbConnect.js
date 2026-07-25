const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const dbConnect = async () =>{
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch(err) {
    console.error("Failed to connect to MongoDB:", err);
    console.log("Continuing without DB connection...");
  }
}

module.exports = dbConnect;

