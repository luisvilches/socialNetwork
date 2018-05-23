const router = require('express').Router();
const ctrl = require('../controllers');

router.get("/", ctrl.home.get);

module.exports = router;