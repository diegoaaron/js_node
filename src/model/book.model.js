import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, require },
  author: [{ type: Schema.Types.ObjectId, required: true, ref: "Author" }],
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: { type: String, required: true },
});

const Book = mongoose.model("Book", BookSchema);

export { Book };

// el id no deberia definirse para cada Schema