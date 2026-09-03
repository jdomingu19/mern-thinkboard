// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// server.js

// ?
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// ?
import notesRoutes from "./routes/notesRoutes.js";
import { connectDatabase } from "./config/database.js";
import rateLimiter from "./middleware/rateLimiter.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application and configure server port
const app = express();
const PORT = process.env.PORT || 5001;

// ?
app.use(cors({ origin: "http://localhost:5173" }));

// Middlewares to parse JSON requests and apply rate limiting
app.use(express.json());
app.use(rateLimiter);

// Register notes routes under /api/notes path
app.use("/api/notes", notesRoutes);

// Connect to MongoDB before starting the server listener
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
