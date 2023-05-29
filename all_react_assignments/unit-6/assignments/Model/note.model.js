const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  titles: { type: String, reuired: true },
  body: { type: String, reuired: true },
  authorID:{ type: String, reuired: true },
  author: { type: String, reuired: true },
  category: { type: String, reuired: true },
});

const Notesmodel = mongoose.model("notes", noteSchema);

module.exports = {
  Notesmodel,
};
