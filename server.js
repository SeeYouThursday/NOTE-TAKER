const express = require("express");
const path = require("path");
const notesData = require("./db/db.json");

const app = express();
const PORT = 3001;

// Middleware to default
app.use(express.static("public"));

//routes
//default redundant route
app.get("/", (req, res) => {
  res.send(`Please Enter A Request`);
});

////get notes
app.get("/", (req, res) => {
  res.send(`Please Enter A Request`);
});

////posts new note
app.post("/api/notes", (req, res) => {});

////Delete Note
app.delete("/api/notes:id", (req, res) => {
  const noteId = "";
});

//// Run server and listen for requests
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
