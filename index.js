// MODULOS INTERNOS

const express= require("express");
const mongoose= require("mongoose");
const {Usuario} = require("./model/usuario");

//modulos de rutas creadas

const usuario= require("./routes/usuario");
const autenticacion= require("./routes/autenticacion");
const mascota= require("./routes/mascota");

//APP

const app = express();
app.use(express.json());

// RUTA MODULO DE USUARIO

app.use("/api/usuario",usuario);
app.use("/api/autenticacion",autenticacion);
app.use("/api/mascota",mascota);


//PUERTOS

const port = process.env.PORT || 3001 ;
app.listen(port, () => console.log("Se está ejecutando por el puerto ",port))

//REGISTRAR EN MONGO

mongoose.connect("mongodb://localhost/mascotasdb", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
})

.then(() => console.log(" conexion con mongo establecida .... "))
.catch(() => console.log(" conexion con mongo rechazada ..."));

