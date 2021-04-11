const {Schema, model} = require('mongoose')

const historialSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    accion:{type: String, requiere: true},
    fecha:{type:Date, requiere:true}
   
});
module.exports = model("Historial", historialSchema);