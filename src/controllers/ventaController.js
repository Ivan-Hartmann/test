// Importar el modelo para guardar en la base de datos
Producto = require('../models/ventaModel');
exports.new = function (req, res) {
    var ventaRealizada = new Producto();
    ventaRealizada.cliente= req.body.cliente;
    ventaRealizada.productos= req.body.productos;
    ventaRealizada.save((err)=>{
       if(err){
           res.json({message:'Ocurrió un error',error:err});
       }else{
           res.json({data:ventaRealizada, status:200});
       }
    })
}
