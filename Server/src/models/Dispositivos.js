const {Schema, model} = require('mongoose')

const dispositivoSchema = new Schema({
    color:{type: String, require: true},
    descripcion:{type: String, require: true},
    modelo:{type: String, require: true},
    codigo_modelo:{type:String, require: true},
    existencia:{type:Number, require: true},
    precio:{type: Number, require: true},
    ram:{type:Number, require: true},
    almacenamiento:{type:Number, require:true},
    procesador: {type: String, require: true},
    numero_cores:{type:Number, require: true},
    marca: {type: String, require: true},

});
module.exports = model("Dispositivos", dispositivoSchema);