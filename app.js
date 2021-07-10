const express = require("express");
let notes = require("./notes/notes");
const cors = require("cors");
const noteRoutes = require("./notes/router");
const slugify = require("slugify");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", noteRoutes);

app.delete("/notes/:noteId", (req, res) => {
    const { noteId } = req.params;
    const foundnote = notes.find((note) => note.id === +noteId);
    if (foundnote) {
        notes = notes.filter((note) => note !== foundnote);
        res.status(204).end();
    } else {
        res.status(404);
        res.json({ message: "note not found" });
    }
});

app.post("/notes", (req, res) => {
    const slug = slugify(req.body.title, { lower: true });
    const date = new Date();
    const note = {
        id: notes.length + 1,
        slug,
        date: date.toLocaleDateString(),
        ...req.body,
    }
    notes.push(note);
    res.status(201).json(note);
});

app.listen(8000);