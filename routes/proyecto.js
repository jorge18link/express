require('../models/proyecto')
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.get('/', function(req, res) {
    var us = mongoose.model('proyecto');
    us.find({}, function(err, proyecto){
        if (err) throw err;
        req.render(index,{proyectolist: proyecto});
    });
});

module.exports = router;