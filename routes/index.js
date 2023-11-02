const express = require("express");

//import module for notes
const notes = require("./notes");

//create an instance of express()
const app = express();

app.use("/api/notes", notes);

//export app
module.exports = app;
