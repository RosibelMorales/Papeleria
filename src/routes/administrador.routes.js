const { Router } = require('express')
const router=Router();
const controladorAdministrador = require("../controllers/administrador.controller.js")


router.get('/', controladorAdministrador.obtenerAdministradores)
router.post('/', controladorAdministrador.insertarAdministrador)

module.exports = router