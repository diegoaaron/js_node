import { VentaLibro } from "../model/ventalibro.model.js";

// create VentaLibro

const addVentaLibro = async function (req, res) {
  try {
    let { nombreCliente, libro, correo, fechaVenta } = req.body;
    const ventaLibro = new VentaLibro({
      nombreCliente,
      libro,
      correo,
      fechaVenta,
    });
    await ventaLibro.save();
    console.log(`Se ha registrado la venta del libro con ID: ${ventaLibro._id}`);
    res.status(200).send(ventaLibro);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read all VentaLibro

const readAllVentaLibro = async function (req, res) {
  try {
    let formatData = [];
    const allVentaLibro = await VentaLibro.find().sort({ book: 1 });
    formatData = allVentaLibro.map((ventalibro) => {
      let ventaLib = {};
      ventaLib.id = ventalibro._id;
      ventaLib.nombreCliente = ventalibro.nombreCliente;
      ventaLib.libro = ventalibro.libro;
      ventaLib.correo = ventalibro.correo;
      ventaLib.fechaVenta = ventalibro.fechaVenta;
      return ventaLib;
    });
    res.status(200).send(formatData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read unique VentaLibro

const readUniqueVentaLibro = async function (req, res) {
  try {
    let { id } = req.params;
    const uniqueVentaLibro = await VentaLibro.findById(id);
    res.status(200).send(uniqueVentaLibro);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update VentaLibro with PUT

const putUpdateVentaLibro = async function (req, res) {
  try {
    let { id } = req.params;
    let { nombreCliente, libro, correo, fechaVenta } = req.body;
    const ventaLibroUpdated = await VentaLibro.findByIdAndUpdate(
      { _id: id },
      { nombreCliente, libro, correo, fechaVenta },
      { new: true }
    );
    res.status(200).send(ventaLibroUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update VentaLibro with PATCH

// delete VentaLibro

const deleteVentaLibro = async function (req, res) {
  try {
    let { id } = req.params;
    const ventaLibroDeleted = await VentaLibro.findOneAndDelete({ _id: id });
    res.status(200).send(ventaLibroDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  addVentaLibro,
  readAllVentaLibro,
  readUniqueVentaLibro,
  putUpdateVentaLibro,
  deleteVentaLibro,
};
