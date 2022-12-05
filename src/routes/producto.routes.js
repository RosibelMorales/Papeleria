const { Router } = require('express')
const router=Router();
const controladorProducto = require("../controllers/producto.controller.js")


router.get('/', controladorProducto.obtenerProductos)
router.get('/:idProducto', controladorProducto.obtenerProducto)
router.post('/', controladorProducto.insertarProducto)
router.put('/:idProducto', controladorProducto.actualizarProducto)
router.delete('/:idProducto', controladorProducto.eliminarProducto)

module.exports = router