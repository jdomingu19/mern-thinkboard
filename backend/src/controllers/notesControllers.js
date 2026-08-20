// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// notesControllers.js

// Import Note model to interact with MongoDB collection
import Note from "../models/Note.js";

// Controller to fetch all notes sorted by creation date (newest first)
export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in descending order (newest first)

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Controller to fetch a single note by its unique ID
export const getNoteByID = async (req, res) => {
  try {
    const foundNote = await Note.findById(req.params.id);

    if (!foundNote) return res.status(404).json({ message: "Note not found." });

    res.status(200).json(foundNote);
  } catch (error) {
    console.error("Error in getNoteByID controller.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Controller to create a new note and persist it in MongoDB
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();

    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Controller to update an existing note by ID and return the updated document
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found." });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Controller to delete a note by ID and return the deleted document
export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote)
      return res.status(404).json({ message: "Note not found." });

    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("Error in deleteNote controller.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
