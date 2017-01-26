require('../models/proyecto')
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var proyecto= mongoose.model('proyecto');



router.get('/', function(req, res) {
    var collection = mongoose.model('proyecto');
    collection.find({}, function(err, proyecto){
        if (err) throw err;
    });
});

module.exports = router;