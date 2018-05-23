const router = require('express').Router();

router.get("/",function(req,res){res.json({hello:"world"})});

module.exports = router;