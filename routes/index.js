const express = require("express");

//import module for notes
const notesRouter = require("./notes.js");

const app = express();

app.use("/notes", notesRouter);

//export app
module.exports = app;
