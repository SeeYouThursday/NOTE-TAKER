const express = require("express");

//import module for notes
const notesRouter = require("./notes.js");
// const htmlRouter = require("./html.js");

const app = express();

app.use("/notes", notesRouter);
// app.use("/", htmlRouter);

//export app
module.exports = app;
