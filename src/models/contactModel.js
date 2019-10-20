var mongoose = require('mongoose');
// Creando el Esquema para guardar en la base de datos
var contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: String,
    phone: String,
    create_date: { type: Date, default: Date.now}
});
// Exportando el modelo
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}