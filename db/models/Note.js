const SequelizeSlugify = require("sequelize-slugify");

const NoteModel = (sequelize, DataTypes) => {

    const Note = sequelize.define("Note", {
        title: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
        },
        slug: {
            type: DataTypes.STRING,
            unique: true
        },
    });
    SequelizeSlugify.slugifyModel(Note, { source: ['title'] });
    return Note;
};

module.exports = NoteModel;