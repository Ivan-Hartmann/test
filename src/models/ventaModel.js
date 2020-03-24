var mongoose = require('mongoose');
var contacto = mongoose.model('contacto');
// Creando el Esquema para guardar en la base de datos
var productSchema = mongoose.Schema({
    productos: [{}],
    fecha: { type: String},
    total:{type:Number},
    cuentaCorriente:{ type: mongoose.Schema.ObjectId, ref: "contacto" } 
});
// Exportando el modelo
var Ventas = module.exports = mongoose.model('ventas', productSchema);
module.exports.get = function (callback, limit) {
    Ventas.find(callback).limit(limit);
}
