let notes = require("./notes");
const slugify = require("slugify");

exports.noteFetch = (req, res) => {
    res.json(notes);
};

exports.fetchNote = (req, res) => {
    const { noteId } = req.params;
    const note = notes.find((_note) => _note.id === +noteId);
    res.json(note);
};

// ****************** Delete ******************
exports.deleteNote = (req, res) => {
    const { noteId } = req.params;
    const foundnote = notes.find((note) => note.id === +noteId);

    if (foundnote) {
        notes = notes.filter((note) => note !== foundnote);
        res.status(204).end();
    } else {
        res.status(404);
        res.json({ message: "note not found" });
    }
};


// ****************** Create ******************
exports.createNote = (req, res) => {
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
};