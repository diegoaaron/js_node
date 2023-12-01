import mongoose from "mongoose";
import { DateTime, Interval } from "luxon";

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstName: { type: String, require: true, maxLength: 100 },
  lastName: { type: String, require: true, maxLength: 100 },
  email: { type: String, maxLength: 100 },
  dateOfBirthday: { type: Date },
  dateOfDeath: { type: Date },
});

// nombre y apellido

AuthorSchema.virtual("fullName").get(function () {
  let fullName = "";

  if (this.firstName && this.lastName) {
    fullName = `${this.firstName} ${this.lastName}`;
  }

  return fullName;
});

// edad

AuthorSchema.virtual("lifespan").get(function () {
  let fechaActual = this.dateOfDeath
    ? DateTime.fromJSDate(THIS.dateOfDeath)
    : DateTime.now();
  let edad = Interval.fromDateTimes(this.dateOfBirthday, fechaActual).length("years");
  edad = Math.round(edad);
  return edad;
});

// fecha de nacimiento formateada

AuthorSchema.virtual("dateOfBirthFormatted").get(function () {
  let fechaDeNacimiento = this.dateOfBirthday ? this.dateOfBirthday : "";
  if (fechaDeNacimiento === "") {
    return "fecha de nacimiento no registrada";
  }
  fechaDeNacimiento = DateTime.fromJSDate(this.dateOfBirthday).toLocaleString(
    Datetime.DATE_FULL
  );
  return fechaDeNacimiento;
});

// fecha de muerte formateada

AuthorSchema.virtual("dateOfDeadFormatted").get(function () {
  let fechaDeMuerte = this.dateOfDeath ? this.dateOfDeath : "";
  if (fechaDeMuerte === "") {
    return "fecha de muerte no registrada";
  }
  fechaDeMuerte = DateTime.fromJSDate(this.fechaDeMuerte).toLocaleString(
    Datetime.DATE_FULL
  );
  return fechaDeMuerte;
});

const Author = mongoose.model("Author", AuthorSchema);

export { Author };


// agregar a la imagen del modelo author los 2 campos virtuales extra