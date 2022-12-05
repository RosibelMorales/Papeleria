const { Router } = require('express')
const router=Router();
const controladorRepartidor = require("../controllers/repartidor.controller.js")


router.get('/', controladorRepartidor.obtenerRepartidores)
router.get('/:CorreoRepartidor', controladorRepartidor.obtenerRepartidor)
router.post('/', controladorRepartidor.insertarRepartidor)
router.put('/:CorreoRepartidor', controladorRepartidor.actualizarRepartidor)
router.delete('/:CorreoRepartidor', controladorRepartidor.eliminarRepartidor)

module.exports = router