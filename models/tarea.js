var Schema = require('mongoose').Schema
var usuario  = mongoose.model('usuario')
var tareaSchema = new Schema({
  titulo:String,
  descripcion:String,
  estado:String,
  usuario: {type: Schema.ObjectId, ref: "usuario"}
})
 
module.exports = mongoose.model('tarea', tareaSchema);