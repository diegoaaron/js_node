import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ScanSchema = new Schema({
  numapuesta: { type: Number },
  equipoa: { type: String, require: true, maxLength: 100 },
  equipob: { type: String, require: true, maxLength: 100 },
  cuota: { type: Number },
  marcatiempoapuesta: { type: Date },
  pantallazoapuesta: { type: Boolean },
});

const Scan = mongoose.model("Scan", ScanSchema);

export { Scan };
