let router = require('express').Router();
// Respuesta para ruta inicial
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome!',
    });
});
// Import controlador
var contactController = require('../controllers/ccController');
var productController = require('../controllers/productController');
var ventaController = require('../controllers/ventaController');
// Rutas
router.route('/cuentas')
    .get(contactController.index)
    .post(contactController.new);
router.route('/cuentas/:id')
    .put(contactController.update);

router.route('/productos')
    .get(productController.index)
    .post(productController.new)
    .put(productController.actualizar);
router.route('/productos/:producto_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);

router.route('/venta')
    .get(ventaController.index)
    .post(ventaController.new);
// Exportando la variable que contiene todas las rutas
module.exports = router;
