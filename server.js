const express = require("express");
const path = require("path");
const notesData = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to default
app.use(express.static("./public"));
app.use(express.json()); //intercept jsonStringify and parse it
app.use(express.urlencoded({ extended: true }));

//routes
//default redundant route
app.get("/", (req, res) => {
  // res.sendFile(__dirname, "index.html");
  res.send(`Please Enter A Request`);
});

////get notes


////posts new note


////Delete Note
app.delete("/api/notes:id", (req, res) => {
  const noteId = "";
});

//// Run server and listen for requests
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
