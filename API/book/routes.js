const express = require("express");
const router = express.Router();
let notes = require("./notes");

const { noteFetch, deleteNote, createNote } = require("./controllers");

router.get("/", noteFetch);

// ****************** Delete ******************
router.delete("/:noteId", deleteNote);

// ****************** Create ******************
router.post("/", createNote);


router.get("/:noteId", (req, res) => {
    const { noteId } = req.params;
    const note = notes.find((_note) => _note.id === +noteId);
    res.json(note);
});



module.exports = router;