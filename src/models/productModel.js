var mongoose = require('mongoose');
// Creando el Esquema para guardar en la base de datos
var productSchema = mongoose.Schema({
    marca: { type: String, required: true },
    nombre: { type: String},
    codigo: { type: String},
    talla: { type: String, required: true },
    color: { type: String, required: true },
    cantidad: { type: Number, required: true },
    vendido: { type: Number },
    fecha: { type: Date, default: Date.now}
});
// Exportando el modelo
var Producto = module.exports = mongoose.model('producto', productSchema);
module.exports.get = function (callback, limit) {
    Producto.find(callback).limit(limit);
}
