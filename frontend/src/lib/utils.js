// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> utils.js

// ?
const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default formatDate;
