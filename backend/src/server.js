// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> server.js

// Import core libraries for Express, environment variables, and CORS
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import path module for directory resolution
import path from "path";

// Import routes, database connection, and rate limiter middleware
import notesRoutes from "./routes/notesRoutes.js";
import { connectDatabase } from "./config/database.js";
import rateLimiter from "./middleware/rateLimiter.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application and configure server port
const app = express();
const PORT = process.env.PORT || 5001;

// Resolve current directory path for static file serving
const __dirname = path.resolve();

// Apply CORS policy only in development environment
if (process.env.NODE_ENV !== "production") {
  // Enable CORS for frontend origin
  app.use(cors({ origin: "http://localhost:5173" }));
}

// Middlewares to parse JSON requests and apply rate limiting
app.use(express.json());
app.use(rateLimiter);

// Register notes routes under /api/notes path
app.use("/api/notes", notesRoutes);

// Serve frontend build files in production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Connect to MongoDB before starting the server listener
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
