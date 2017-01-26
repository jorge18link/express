var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


mongoose.createConnection('mongodb://user:1234@ds131139.mlab.com:31139/projects');
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
router.get('/', function(req, res) {
    var collection = mongoose.model('proyecto');
    collection.find({}, function(err, proyecto){
        if (err) throw err;
      	res.json(proyecto);
    });
});

module.exports = router;