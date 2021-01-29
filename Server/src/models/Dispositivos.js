const {Schema, model} = require('mongoose')

const dispositivoSchema = new Schema({
numeroSerie:{type: String, require: true},
modelo:{type: String, require: true},
marca: {type: String, require: true},
tipo: {type: String, require: true},
memoria: {type: String, require: true},
procesador: {type: String, require: true},
resolucion:{type: String, require: true},
precio:{type: Number, require: true},
},{
    timestamps:true, 
    versionKey:false
});
module.exports = model("Dispositivos", dispositivoSchema);
