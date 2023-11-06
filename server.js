const express = require("express");
const path = require("path");
///added this index router below for future dev - only acts as a router for the notes API routes
const api = require("./routes/index.js");

//Instance of express
const app = express();
//port HEROKU port or localhost:3001
const PORT = process.env.PORT || 3001;

////Middleware
app.use(express.static("./public")); // Middleware to default
app.use(express.json()); //intercept jsonStringify and parse it
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

//// HTML routes
// Start get req
app.get("/", (req, res) => {
  res.sendFile(__dirname, "index.html");
  res.send(`Please Enter A Request`);
});

//gets the notes.html
app.get("/notes", (req, res) => {
  console.info(`${req.method} request received to get a note`);
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//// Run server and listen for requests
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
