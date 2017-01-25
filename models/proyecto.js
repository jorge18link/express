var Schema = require('mongoose').Schema
 var tarea= mongoose.model('tarea')
var projectoSchema = new Schema({
  titulo:String,
  descripcion:String,
  tarea:{type:Schema.ObjectId, ref: "tarea"}
})
 

module.exports = mongoose.model('proyecto', projectoSchema);