const {Schema, model} = require('mongoose')

const serieSchema = new Schema({
    
num_serie:{type: String, require: true},
estado:{type: String, require: true},

dispositivo:{
    type: Schema.Types.ObjectId,
    ref: 'Dispositivos'
},
cliente:{
    type: Schema.Types.ObjectId,
    ref: 'Cliente'
},
pedido:{type: String, require: true}


});

module.exports = model("Serie", serieSchema);