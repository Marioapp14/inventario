const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');

const elementRoutes = require("./routes/elemento.routes");

// Cargar las variables de entorno desde el archivo .env
dotenv.config();


const app = express();



//midlewares
app.use(express.json()); //cada vez que se envie un dato en Json el servidor lo va a interpretar y lo guarda dentro de un req.body


//settings
app.use(cors());

//routes
app.use("/inventario", elementRoutes);


module.exports = app;
