// MODULOS INTERNOS

const jwt= require("jsonwebtoken");

//FUNCION MIDDLEWARE

function autenticacion (req,res,next){
	let jwtToken = req.header("Authorization");
	
	jwtToken= jwtToken.split(" ")[1];

	// EL TOKEN NO EXISTE
	
	if (!jwtToken) return res.status(400).send("No existe el Token para validar")

	// EXISTE EL JSON WEB TOKEN
	
	try{
		const payload= jwt.verify(jwtToken,"clave");
		req.usuario= payload;
		next();
	}
	catch(error){
		res.status(400).send("Token no valido, no tiene autorizacion");
	}

}

//EXPORTAR 

module.exports= autenticacion;
