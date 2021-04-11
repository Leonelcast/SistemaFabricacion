const {Schema, model} = require('mongoose')

const pedidoSchema = new Schema({
    cantidad: {type: Number, require: true},
    total: {type: Number, require: true},
    fecha_p: {type: String, require: true, default: Date.now},
    fecha_e: {type: Date, require: true, default: Date.now() + + 7*24*60*60*1000},
    estado:{type: String, requiere: true, default:'Procesando Orden'},
    dispositivo:{
        type: Schema.Types.ObjectId,
        ref: 'Dispositivos'
    },
    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    }
   
});
module.exports = model("Pedido", pedidoSchema);