import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArticuloSchema = new Schema({
  numitem: { type: Number },
  nombre: { type: String, require: true, maxLength: 100 },
  precio: { type: String, require: true, maxLength: 100 },
  marcatiempoapuesta: { type: Date },
});

const Articulo = mongoose.model("Articulo", ArticuloSchema);

export { Articulo };
