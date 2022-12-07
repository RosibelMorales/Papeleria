const { Router } = require('express')
const { root } = require("../controllers/index.controller.js")
const router=Router();

router.get('/', root);

module.exports = router;