const notesRouter = require("express").Router();

// Helper Functions taken from Act. 22
const { readFromFile, readAndAppend } = require("../helpers/fsUtils.js");

notesRouter.get("/", (req, res) => {
  console.info(`${req.method} request received to get a note`);
  //  activity 22 feedback
  readFromFile("../db/db.json").then((data) => res.json(JSON.parse(data)));
});

notesRouter.post("/notes", (req, res) => {
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

module.exports = notesRouter;
