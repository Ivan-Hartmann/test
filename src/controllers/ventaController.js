// Importar el modelo para guardar en la base de datos
Producto = require('../models/ventaModel');
exports.new = function (req, res) {
    var ventaRealizada = new Producto();
    ventaRealizada.fecha= req.body.fecha;
    ventaRealizada.productos= req.body.productos;
    ventaRealizada.total= req.body.total;
    
    if(req.body.cuentaCorriente){
    ventaRealizada.cuentaCorriente=req.body.cuentaCorriente;
    }
    ventaRealizada.save((err)=>{
       if(err){
           res.json({message:'Ocurrió un error',error:err});
       }else{
           res.json({data:ventaRealizada, status:200});
       }
    })
}
