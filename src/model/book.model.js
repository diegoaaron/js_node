import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, require: true },
  author: [{ type: Schema.Types.ObjectId, required: true, ref: "Author" }],
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: { type: String, required: true },
});

const Book = mongoose.model("Book", BookSchema);

export { Book };

// el id no deberia definirse para cada Schema en vez de utilizar uno autogenerador por Mongo
