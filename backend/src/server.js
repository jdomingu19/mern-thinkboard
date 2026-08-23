// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// server.js

// Import Express, routes, database connection, dotenv, and middleware
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDatabase } from "./config/database.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application and configure server port
const app = express();
const PORT = process.env.PORT || 5001;

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
