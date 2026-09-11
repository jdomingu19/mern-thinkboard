// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> NavBar.jsx

// Import navigation and icon components
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

/**
 * NavBar component
 *
 * Renders the application header with title and navigation link to create a new note.
 */
const NavBar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10 ">
      <div className="mx-auto max-w-5xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            Thinkboard
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// Export NavBar component
export default NavBar;
