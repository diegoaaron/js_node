import mongoose from "mongoose";

async function openmongoconexion(url) {
  try {
    await mongoose.connect(url);
    console.log("conexion establecida!");
  } catch (error) {
    console.log(error);
  }
}

async function connectionToTransacction(url) {
  try {
    let connectionOn = await mongoose.connect(url);
    let sessionToTransaction = await connectionOn.startSession();
    console.log("sesion levantada!");
    return sessionToTransaction;
  } catch (error) {
    console.log(error);
  }
}

async function closemongoconexion() {
  try {
    await mongoose.connection.close();
    console.log("conexion cerrada!");
  } catch (error) {
    console.log(error);
  }
}

export { openmongoconexion, connectionToTransacction, closemongoconexion };
