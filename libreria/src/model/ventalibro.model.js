import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VentaLibroSchema = new Schema({
  nombreCliente: { type: String, required: true },
  libro: [{ type: Schema.Types.ObjectId, required: true, ref: "Libro" }],
  correo: { type: String },
  fechaVenta: { type: Date },
});

const VentaLibro = mongoose.model("VentaLibro", VentaLibroSchema);

export { VentaLibro };
