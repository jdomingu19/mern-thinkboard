// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// server.js

// ?
import express, { json } from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDatabase } from "./config/database.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

// ?
dotenv.config();

// ?
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware ?
app.use(express.json());
app.use(rateLimiter);

// ?
app.use("/api/notes", notesRoutes);

// ?
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
