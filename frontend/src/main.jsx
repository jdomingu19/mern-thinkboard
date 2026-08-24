// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> main.jsx

// ?
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ?
import { BrowserRouter } from "react-router";

// ?
import { Toaster } from "react-hot-toast";

// ?
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
);
