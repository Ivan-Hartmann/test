var mongoose = require('mongoose');
// Creando el Esquema para guardar en la base de datos
var contactSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String},
    correo: { type: String},
    telefono: String,
    direccion: String,
    total:Number,
    ultimoPago:Number,
    fechaUltimoPago:Date
},{ timestamps: true });
// Exportando el modelo
var Contact = module.exports = mongoose.model('contacto', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
