// Importar el modelo para guardar en la base de datos
Ventas = require('../models/ventaModel');
Contacto = require('../models/ccModel');
exports.new = function (req, res) {
    var ventaRealizada = new Ventas();
    ventaRealizada.fecha= req.body.fecha;
    ventaRealizada.productos= req.body.productos;
    ventaRealizada.total= req.body.total;
    ventaRealizada.cuentaCorriente = req.body.cuentaCorriente ? req.body.cuentaCorriente : ventaRealizada.cuentaCorriente;
    
    ventaRealizada.save((err)=>{
       if(err){
           res.json({message:'Ocurrió un error',error:err});
       }else{
           res.json({data:ventaRealizada, status:200});
       }
    })
}

 exports.index = function (req, res) {
        Ventas.find({}, function(err, ventas) {
        Contacto.populate(ventas, {path: "cuentaCorriente"},function(err, ventas){
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }else{
                res.json({
                    status: "success",
                    data: ventas
                });
               }
           });
        }); 
    }
