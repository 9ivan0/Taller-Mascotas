// MODULOS INTERNOS

const mongoose= require("mongoose");
const jwt= require("jsonwebtoken");

//ESQUEMA MASCOTA

const esquemaMascota= new mongoose.Schema({

	idUsuario: String,
	nombre: String,
	tipo: String,
	descripcion: String
});

//EXPORTAR

const Mascota= mongoose.model("mascota",esquemaMascota);
module.exports.Mascota= Mascota;

