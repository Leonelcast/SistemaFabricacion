const {Schema, model} = require('mongoose')

const historialSchema = new Schema({
    user:{type: String, requiere: true},
    accion:{type: String, requiere: true},
    fecha:{type:Date, requiere:true}
   
});

module.exports = model("Historial", historialSchema); 