// Importar el modelo para guardar en la base de datos
Contact = require('../models/ccModel');
// Ruta inicial
    exports.index = function (req, res) {
        Contact.get(function (err, contacts) {
        
            if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            data: contacts
        });
    });
};
// Crear
exports.new = function (req, res) {
    const {nombre, apellido, telefono, direccion} = req.body;
    var correo='';
    var total=0;
    if(req.body.correo){
        correo=req.body.correo;
    }
    if(req.body.total){
        total=req.body.total;
    }
    var contact = new Contact();
    contact.nombre = nombre;
    contact.apellido = apellido;
    contact.telefono = telefono;
    contact.direccion = direccion;
    contact.correo = correo;
    contact.total = total;
// Guardar y verificar errores
    contact.save(function (err) {
         if (err)
             res.json({
                 status:'error',
                 data:err
             });
        res.json({
            message: 'Nuevo cliente creado',
            data: contact
        });
    });
};

// Actualizar
exports.update = function (req, res) {
Contact.findById(req.params.id, function (err, contact) {
        if (err)
            res.send(err);
    
    contact.nombre = req.body.nombre ? req.body.nombre : contact.nombre;
    contact.apellido = req.body.apellido ? req.body.apellido : contact.apellido;
    contact.telefono = req.body.telefono ? req.body.telefono : contact.telefono;
    contact.direccion = req.body.direccion ? req.body.direccion : contact.direccion;
    contact.correo = req.body.correo ? req.body.correo : contact.correo;
    contact.total = req.body.total;
    contact.ultimoPago = req.body.ultimoPago;
    contact.fechaUltimoPago = req.body.fechaUltimoPago;
   
// Guardar y verificar errores
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Datos actualizados',
                data: contact
            });
        });
    });
};
// Eliminar
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.id
    }, function (err, contact) {
        if (err)
            res.json({
            status: "error",
            message: err
        });
res.json({
            status: "200",
            message: 'Cliente eliminado'
        });
    });
};
