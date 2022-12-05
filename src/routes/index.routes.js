const { Router } = require('express')
const { pool } = require('../database.js')
const { ping} = require("../controllers/index.controller.js")
const router=Router();
router.get('/ping',ping);

module.exports = router;