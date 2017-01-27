//require('../models/usuario')
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/*router.get('/', function(req, res) {
    var collection = mongoose.model('usuario');
    collection.find({}, function(err, usuario){
        if (err) throw err;
        req.render(index,{usuariolist: usuario});
    });
});*/

module.exports = router;
