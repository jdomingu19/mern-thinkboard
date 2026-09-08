// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> axios.js

// ?
import axios from "axios";

// ?
const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
});

// ?
export default axiosInstance;
