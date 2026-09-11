// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> NoteCard.jsx

// Import icons and navigation components
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

// Import utilities, axios instance, and toast notifications
import formatDate from "../lib/utils";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

/**
 * NoteCard component
 *
 * Displays a single note with title, content preview, creation date, and actions for edit/delete.
 * @param {Object} props - Component props
 * @param {Object} props.note - Note object containing title, content, and createdAt
 * @param {Function} props.setNotes - State updater to refresh notes list after deletion
 */
const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (event, noteId) => {
    event.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }

    try {
      await axiosInstance.delete(`/notes/${noteId}`);
      setNotes((previous) => previous.filter((note) => note._id !== noteId));

      toast.success("Note deleted successfully!");
    } catch (error) {
      console.log("Error deleting notes.", error);
      toast.error("Failed to deleted notes.");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#1C4E80]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(event) => {
                handleDelete(event, note._id);
              }}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Export NoteCard component
export default NoteCard;
