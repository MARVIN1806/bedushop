const express = require('express');
const mongoose = require("mongoose");
require("./src/config/passport");
const app = express();
/**
Sirve para parsear todo lo recibido en la peticion
*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
/*
Conexion  a la base de datos Mongodb
*/
mongoose.connect(process.env.MONGOURI);
/*
conecta mi app de expres con las rutas en index.js
*/
app.use('/v1', require('/src/routes'))
/*
activar para que este escuchando nuestras peticiones
*/
const PORT = process.env.PORT;
app.listen(PORT,() => console.log("The server is Alive!!"));


app.get('/', (req, res) => res.send("holamundo"))
 

