// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// database.js

import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.PRIVATE_MONGODB_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB.", error);
    process.exit(1);
  }
};
