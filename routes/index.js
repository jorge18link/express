require('../models/proyecto')
//require('../models/usuario')
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

/*router.get('/user', function(req, res) {
    var us = mongoose.model('usuario');
    us.find({},{},function(e,docs){
        res.render('index', {
            "usuariolist" : docs
        });
    });
});*/


module.exports = router;

/*
INSTRUCIONES
-----guiate con eso para recorrer lo que hace es mandarle un proyectlist(es el json) a la vista-----
  each proyecto, i in proyectolist
    each tarea, i in proyectolist[i].tarea
      p #{tarea.titulo}

http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
https://www.airpair.com/javascript/complete-expressjs-nodejs-mongodb-crud-skeleton
*/
