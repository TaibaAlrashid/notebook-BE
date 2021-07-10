const express = require("express");
const router = express.Router();

const notes = require("./notes");

router.get("/", (req, res) => {
    res.json(notes);
});


router.get("/:noteId", (req, res) => {
    const { noteId } = req.params;
    const note = notes.find((_note) => _note.id === +noteId);
    res.json(note);
});





module.exports = router;