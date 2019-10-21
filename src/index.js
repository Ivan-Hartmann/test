//IMPORTS
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

let app = express();

// Import routes
let apiRoutes = require("./routes/api-routes");

// Configuracion bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
// Conexión a mongo atlas (mongodb)
mongoose.connect('mongodb+srv://Ivanlomejor:Ivanlomejor@myapp-2jlr6.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Comprobación de errores
if(!db)
    console.log("Error conectando a la base de datos")
else
    console.log("Base de datos conectada")

// Variable para seleciconar un puerto
var port = process.env.PORT || 8080;

// Mensaje para una url por defecto
app.get('/', (req, res) => res.send('Ruta inicial'));

app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Servidor corriendo en puerto: " + port);
});