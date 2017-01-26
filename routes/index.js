require('../models/proyecto')
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');




router.get('/', function(req, res) {
    var collection = mongoose.model('proyecto');
    collection.find({},{},function(e,docs){
        res.render('index', {
            "proyectolist" : docs
        });
    });
});

module.exports = router;