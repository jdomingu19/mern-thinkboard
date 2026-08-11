// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// server.js

import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You got 5 notes!");
});

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
