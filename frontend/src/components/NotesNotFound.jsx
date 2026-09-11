// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> NotesNotFound.jsx

// Import icon and navigation components
import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

/**
 * NotesNotFound component
 *
 * Displays a friendly message and call-to-action when no notes are available.
 */
const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No notes yet</h3>
      <p className="text-base-content/70">
        Ready to organize <strong>your thoughts</strong>? Create your first note
        to get started on <strong>your journey</strong>.
      </p>
      <Link to={"/create"} className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};

// Export NotesNotFound component
export default NotesNotFound;
