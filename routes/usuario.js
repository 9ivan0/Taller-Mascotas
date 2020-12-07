//MODULOS INTERNOS

const express= require("express");
const router= express.Router();

//INVOLUCRAR MODULOS CREADOS

const {Usuario} = require("../model/usuario");

router.post("/", async(req, res) => {

	// VALIDAR EXISTENCIA DEL USUARIO
	let usuario= await Usuario.findOne({ correo: req.body.correo });

	//EL USUARIO YA EXISTE EN LA BD
	
	if (usuario) return res.status(400).send("El usuario ya existe en la base de datos")

	// EL USUARIO NO EXISTE
	
	usuario= new Usuario({
		nombre: req.body.nombre,
		correo: req.body.correo,
		pass: req.body.pass,
	});

	// JSON WEB TOKEN - ENVIAR USUARIO

	const result = await usuario.save();
	const jwToken= usuario.generateJWT();
	res.status(200).send({jwToken})

});

// EXPORTAR

module.exports = router

