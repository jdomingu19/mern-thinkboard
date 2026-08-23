// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Note.js

// Import Mongoose library to define schema and model
import mongoose from "mongoose";

// Define Note schema with title and content fields, including timestamps
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  },
);

// Create Note model based on schema for MongoDB operations
const Note = mongoose.model("Note", noteSchema);

// Export Note model for use in controllers and routes
export default Note;
