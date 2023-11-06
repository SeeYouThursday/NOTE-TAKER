const notesRouter = require("express").Router();
// Helper Functions taken from Act. 22 in Week 11 for fs - promisified
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils.js");
// random id gen
const { v4: uuidv4 } = require("uuid");
const { error } = require("console");

notesRouter.get("/", (req, res) => {
  console.info(`${req.method} request received to get a note`);
  //  activity 22 feedback
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notesRouter.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

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
});

////Delete Note
notesRouter.delete("/:id", (req, res) => {
  console.info(`${req.method} request received to delete a note`);
  const { id } = req.params;
  console.log("this", id);
  if (id) {
    console.log(`Deleting note ${id}`);
    readFromFile("./db/db.json")
      .then((data) => {
        const parsedData = JSON.parse(data);
        const updatedData = parsedData.filter((note) => note.id !== id);
        console.log(updatedData);
        writeToFile("./db/db.json", updatedData);
      })
      .then(
        notesRouter.get("/", (req, res) => {
          console.info(`${req.method} request received to get a note`);
          //  activity 22 feedback
          readFromFile("./db/db.json").then((data) =>
            res.json(JSON.parse(data))
          );
        })
      )
      .catch((error) => {
        console.error("Error occurred while deleting note:", error);
        res.status(500).json({ error: "Internal server error" });
      });
  } else {
    res.status(400).json({ error: "Missing note ID" });
  }
});

module.exports = notesRouter;
