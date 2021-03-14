const {Schema, model} = require('mongoose')

const pedidoSchema = new Schema({
    cantidad: {type: Number, require: true},
    total: {type: Number, require: true},
    fecha_p: {type: Date, require: true},
    fecha_e: {type: Date, require: true},
    dispositivo:{
        type: Schema.Types.ObjectId,
        ref: 'Dispositivos'
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
});
module.exports = model("Pedido", pedidoSchema);