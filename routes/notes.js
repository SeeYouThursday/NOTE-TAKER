const notesRouter = require("express").Router();
// const DataUpdate = require("../helpers/db_constructor");
// Helper Functions taken from Act. 22 in Week 11
const { readFromFile, readAndAppend } = require("../helpers/fsUtils.js");
// random id gen
const { v4: uuidv4 } = require("uuid");
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// middleware
// notesRouter.use(express.json());

notesRouter.get("/", (req, res) => {
  console.info(`${req.method} request received to get a note`);
  //  activity 22 feedback
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notesRouter.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  // let response;

  // Check if there is anything in the response body
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    //Read existing notes from db
    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.status(201).json(response);
  } else {
    res.status(400).json("Request body must at least contain a title name");
  }

  // Log the response body to the console
  console.log(req.body);
});

module.exports = notesRouter;
