// MODULOS INTERNOS

const express=require("express");
const router= express.Router();

//INVOCAR MODULOS

const {Usuario}=require("../model/usuario");

//RUTA

router.post("/", async(req,res)=>{

	const usuario= await Usuario.findOne({correo: req.body.correo});

	//NO EXISTE CORREO

	if (!usuario) return res.status(400).send("Usuario o contraseña invalida");

	// NO EXISTE CONTRASEÑA

	if (usuario.pass !== req.body.pass) return res.status(400).send("Usuario o contraseña invalida");

	// GENERAR JWT

	const jwtToken= usuario.generateJWT();
	res.status(200).send({jwtToken});

})

// EXPORTAR

module.exports= router;

