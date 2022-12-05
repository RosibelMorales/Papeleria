const { Router } = require('express')
const router=Router();
const controladorClientes = require("../controllers/clientes.controller.js")



router.get('/', controladorClientes.obtenerClientes)
router.get('/:CorreoCliente', controladorClientes.obtenerCliente)
router.post('/', controladorClientes.agregarCliente)
router.put('/:CorreoCliente', controladorClientes.actualizarCliente)
router.delete('/:CorreoCliente', controladorClientes.eliminarCliente)
module.exports = router
