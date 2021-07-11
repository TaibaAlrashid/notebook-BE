const express = require("express");
const router = express.Router();
let notes = require("./notes");

const { noteFetch, deleteNote, createNote, fetchNote } = require("./controllers");

router.get("/", noteFetch);

// ****************** Delete ******************
router.delete("/:noteId", deleteNote);

// ****************** Create ******************
router.post("/", createNote);


router.get("/:noteId", fetchNote);



module.exports = router;