import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LibroSchema = new Schema({
  autor: [{ type: Schema.Types.ObjectId, required: true, ref: "Autor" }],
  titulo: { type: String, required: true },
  resumen: { type: String, required: true },
  isbn: { type: String, required: true },
  serie: { type: String, required: true },
  genero: [{ type: String, required: true }],
  estado: { type: String, enum: ["disponible", "vendido"], default: "disponible" },
});

const Libro = mongoose.model("Libro", LibroSchema);

export { Libro };
