const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();


const app = express();

//settings


//midlewares
app.use(express.json()); //cada vez que se envie un dato en Json el servidor lo va a interpretar y lo guarda dentro de un req.body


app.use(cors());

//routes


module.exports = app;
