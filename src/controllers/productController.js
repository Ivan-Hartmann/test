// Importar el modelo para guardar en la base de datos
Product = require('../models/productModel');
// Ruta inicial
    exports.index = function (req, res) {
        Product.get(function (err, productos) {
        
            if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "correcto",
            data: productos
        });
    });
};
// Crear
exports.new = function (req, res) {
    var producto = new Product();
    producto.marca = req.body.marca ? req.body.marca : producto.marca;
    producto.nombre = req.body.nombre ? req.body.nombre : producto.nombre;
    producto.codigo = req.body.codigo ? req.body.codigo : producto.codigo;
    producto.talla = req.body.talla;
    producto.color = req.body.color;
    producto.cantidad = req.body.cantidad;
// Guardar y verificar errores
    producto.save(function (err) {
         if (err)
             res.json(err);
        res.json({
            message: 'Nuevo producto cargado correctamente!',
            data: producto
        });
    });
};
// Buscar por id
exports.view = function (req, res) {
    Product.findById(req.params.producto_id, function (er, producto) {
        if (er)
            res.send(er);
        res.json({
            data: producto
        });
    });
};
// Actualizar
exports.update = function (req, res) {
Product.findById(req.params.producto_id, function (err, producto) {
        if (err)
            res.send(err);
            producto.marca = req.body.marca ? req.body.marca : producto.marca;
            producto.nombre = req.body.nombre;
            producto.codigo = req.body.codigo;
            producto.talla = req.body.talla;
            producto.color = req.body.color;
            producto.cantidad = req.body.cantidad;
            producto.vendido = req.body.vendido;
            // Guardar y verificar errores
            producto.save(function (err) {
            if (err)
                res.json({
                    data: err,
                    message:'ERROR'
                });
            res.json({
                message: 'Producto actualizado correctamente',
                data: producto
            });
        });
    });
};
// Eliminar
exports.delete = function (req, res) {
    Product.deleteOne({
        _id: req.params.producto_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Producto eliminado'
        });
    });
};
// Buscar y Actualizar o Guardar
exports.actualizar = function (req, res) {
    var update = req.body;
    const {marca, nombre, codigo, talla, color} =req.body;
    var filter='';
    if(update.vendido==null){
        update.vendido=2;   
    }
    if(nombre!='' && codigo!=''){
        filter = {
            "marca": marca,
            "nombre": nombre,
            "codigo": codigo,
            "color": color,
            "talla": talla
            };
        }
    if(nombre==''){
        filter = {
        "marca": marca,
        "codigo": codigo,
        "color": color,
        "talla": talla
        };
    }else{
        filter = {
            "marca": marca,
            "nombre": nombre,
            "color": color,
            "talla": talla
        };
    }

Product.findOneAndUpdate(filter, update, {
  new: true,
  upsert: true // Esta funcion es para agregar un documento nuevo en caso de no ser encontrado
})
.then(data => res.json({data:data, message:true}))
.catch(err => ({data:err, message:false}));

}
