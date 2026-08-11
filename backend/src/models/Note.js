// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Note.js

import mongoose from "mongoose";

// Step 1 - Create a Schema
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
    timestamps: true, // createdAt, updatedAt
  },
);

// Step 2 - Create a Model Based Off of that Schema
const Note = mongoose.model("Note", noteSchema);

export default Note;
