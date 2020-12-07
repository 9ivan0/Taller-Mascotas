//MODULOS INTERNOS

const express= require("express");
const router= express.Router();

const {Mascota}= require("../model/mascota");
const {Usuario} = require("../model/usuario");

const autenticacion= require("../middleware/autenticacion");

//RUTA

router.post("/",autenticacion,async(req, res)=> {

	//ID DEL USUARIO VALIDADO
	const usuario= await Usuario.findById(req.usuario._id);
	const mascotaUsuario= await Mascota.findOne({tipo: req.body.tipo,idUsuario: usuario._id});

	//NO EXISTE EL USUARIO
	if (!usuario) return res.status(400).send("El usuario no existe en la base de datos");

	if (mascotaUsuario) 
		return res.status(400).send("El usuario ya tiene registrada una mascota");
	//INSERTAR LA MASCOTA CON ID, SI EL USUARIO EXISTE

	const mascota= new Mascota ({

		idUsuario: usuario._id,
		nombre: req.body.nombre,
		tipo: req.body.tipo,
		descripcion: req.body.descripcion,
	});

	//ENVIO DEL OBJETO
	const result= await mascota.save();
	res.status(200).send(result);

});

//EXPORTAR
module.exports = router;

