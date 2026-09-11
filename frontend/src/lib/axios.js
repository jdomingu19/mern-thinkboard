// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> axios.js

// Import axios library for HTTP requests
import axios from "axios";

// Create reusable axios instance with base API URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Export axios instance for use across frontend
export default axiosInstance;
