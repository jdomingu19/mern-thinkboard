// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// database.js

// Import Mongoose library to manage MongoDB connection
import mongoose from "mongoose";

// Establish and handle MongoDB connection using environment variables
export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.PRIVATE_MONGODB_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB.", error);
    process.exit(1);
  }
};
