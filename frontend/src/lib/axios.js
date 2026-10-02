// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> axios.js

// Import axios library for HTTP requests
import axios from "axios";

// Define base API URL depending on environment mode
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// Create reusable axios instance with base API URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Export axios instance for use across frontend
export default axiosInstance;
