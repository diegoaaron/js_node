import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, required: true, ref: "Book" },
  imprint: { type: Number, required: true }, // numero de ejemplar (la biblioteca puede haber comprado 10 ejemplares de un mismo libro para prestar)
  status: {
    type: String,
    required: true,
    enum: ["Disponible", "Mantenimiento", "Prestado", "Reservado"],
    default: "Mantenimiento",
  },
  dueBack: { type: Date }, // fecha de devolucion del libre prestado
});

const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);

export { BookInstance };

// agregar los campos pendientes al diagrama (imagen) de la bd documental
