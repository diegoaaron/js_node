import mongoose from "mongoose";
import { DateTime, Interval } from "luxon";

const Schema = mongoose.Schema;

const AutorSchema = new Schema({
  nombres: { type: String, required: true, maxLength: 100 },
  apellidos: { type: String, required: true, maxLength: 100 },
  fechaNacimiento: { type: Date },
  fechaMuerte: { type: Date },
});

// campo virtual: nombre completo

AutorSchema.virtual("nombreCompleto").get(function () {
  let fullName = "";

  if (this.nombres && this.apellidos) {
    fullName = `${this.nombres} ${this.apellidos}`;
  }

  return fullName;
});

// campo virtual: edad

AutorSchema.virtual("edad").get(function () {
  let fechaActual = this.fechaMuerte
    ? DateTime.fromJSDate(this.fechaMuerte)
    : DateTime.now();
  
  let edad = Interval.fromDateTimes(this.fechaNacimiento, fechaActual).length("years");
  edad = Math.round(edad);
  
  return edad;
});

const Autor = mongoose.model("Autor", AutorSchema);

export { Autor };
