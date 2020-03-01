var mongoose = require('mongoose');
var contacto = mongoose.model('contacto');
// Creando el Esquema para guardar en la base de datos
var productSchema = mongoose.Schema({
    cliente: { type: String},
    productos: [{}],
    fecha: { type: Date, default:Date.now},
    total:{type:Number},
    cuentaCorriente:{ type: mongoose.Schema.ObjectId, ref: "contacto" } 
});
// Exportando el modelo
var Producto = module.exports = mongoose.model('productos', productSchema);
module.exports.get = function (callback, limit) {
    Producto.find(callback).limit(limit);
}
