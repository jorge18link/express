require('../models/Usuario')
var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var usuario  = mongoose.model('usuario')
var tareaSchema = new Schema({
  titulo:String,
  descripcion:String,
  estado:String,
  usuarios: {type: Schema.ObjectId, ref: "usuario"}
})
 
module.exports = mongoose.model('tarea', tareaSchema);