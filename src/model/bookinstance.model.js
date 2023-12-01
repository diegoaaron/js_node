import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, required: true, ref: "Book" },
  imprint: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Disponible", "Mantenimiento", "Prestado", "Reservado"],
    default: "Mantenimiento",
  },
  dueBack: { type: Date, default: Date.now },
});

const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);

export { BookInstance };

// agregar a la imagene los campos virtuales
