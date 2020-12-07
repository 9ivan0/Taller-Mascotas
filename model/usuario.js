// MODULOS INTERNOS

const mongoose = require("mongoose");
const jwt= require("jsonwebtoken");

//ESQUEMA DE LA COLECCION DE USUARIOS

const esquemaUsuario= new mongoose.Schema({
	nombre: String,
	correo: String,
	pass: String
});

// JSON PARA EL TOKEN DE AUTENTICACION

esquemaUsuario.methods.generateJWT = function () {

	return jwt.sign({
		_id: this.id,
		nombre: this.nombre,
		correo: this.correo,
	},"clave")
};

// EXPORTAR

const Usuario= mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario= Usuario;
module.exports.esquemaUsuario= esquemaUsuario;



