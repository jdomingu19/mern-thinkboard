// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> main.jsx

// Import React strict mode and root rendering API
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import BrowserRouter for client-side routing
import { BrowserRouter } from "react-router";

// Import Toaster for global toast notifications
import { Toaster } from "react-hot-toast";

// Render application root with routing and toast provider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
);
