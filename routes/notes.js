const notes = require("express").Router();

// Helper Functions taken from Act. 22
const { readFromFile, readAndAppend } = require("../helpers/fsUtils.js");

// app.get("/", (req, res) => {
//   console.info(`${req.method} received for notes`);
//   ////Do something here
// });

app.get("/", (req, res) => {
  console.info(`${req.method} request received to get a note`);
  //path.join probably goes here
  res.json(notesData);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res) => {
  console.info(`${req.method} received for notes`);
  ////Do something here
});

app.post("/api/notes", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  // const parseJSON = JSON.parse();
  console.log(req.body);
  //   const { title, text } = req.body;

  let response;

  // Check if there is anything in the response body
  if (req.body && req.body.title && req.body.text) {
    response = {
      status: "success",
      data: req.body,
    };
    res.status(201).json(response);
  } else {
    res.status(400).json("Request body must at least contain a title name");
  }

  // Log the response body to the console
  console.log(req.body);
});
