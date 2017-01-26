require('../models/tarea');
var mongoose= require('mongoose');
var Schema = require('mongoose').Schema
var tarea= mongoose.model('tarea');
var projectoSchema = new Schema({
  titulo:String,
  descripcion:String,
  tareas:{type:Schema.ObjectId, ref: "tarea"}
})
 

module.exports = mongoose.model('proyecto', projectoSchema);