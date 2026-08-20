// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// notesRoutes.js

// Import Express and note controllers to define routes
import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteByID,
  updateNote,
} from "../controllers/notesControllers.js";

// Initialize Express Router instance
const router = express.Router();

// Define CRUD routes for notes resource
router.get("/", getAllNotes);

router.get("/:id", getNoteByID);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

// Export router to be used in server.js
export default router;
