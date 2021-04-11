const {Schema, model} = require('mongoose')

const clienteSchema = new Schema({
nombre:{type: String, require: true},
patente:{type: String, require: true},
usuario:{type: String, require: true},
contra:{type: String, require: true},
ip:{type: String, require: true},
puerto:{type: String, require: true},
dias_entrega:{type: Number, require: true}

});
module.exports = model("Cliente", clienteSchema);