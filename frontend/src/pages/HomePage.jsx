// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> HomePage.jsx

// ?
import { useEffect, useState } from "react";

// ?
import NavBar from "../components/NavBar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";

// ?
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/notes");
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div data-theme="min-h-screen">
      <NavBar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

// ?
export default HomePage;
