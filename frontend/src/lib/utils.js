// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> utils.js

/**
 * Format a JavaScript Date object into a short US date string.
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string (e.g., Sep 11, 2026)
 */
const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Export formatDate utility function
export default formatDate;
