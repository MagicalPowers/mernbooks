const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const notesSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
