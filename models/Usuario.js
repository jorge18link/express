var Schema = require('mongoose').Schema
 
var usuarioSchema = new Schema({
  nombre:String,
  apellido:String,
  descripcion:String
})
module.exports = mongoose.model('usuario', usuarioSchema);
