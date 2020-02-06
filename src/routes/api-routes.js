let router = require('express').Router();
// Respuesta para ruta inicial
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome!',
    });
});
// Import controlador
var contactController = require('../controllers/contactController');
var productController = require('../controllers/productController');
// Rutas
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

router.route('/productos')
    .get(productController.index)
    .post(productController.new)
    .put(productController.actualizar)
router.route('/productos/:producto_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);
// Exportando la variable que contiene todas las rutas
module.exports = router;
