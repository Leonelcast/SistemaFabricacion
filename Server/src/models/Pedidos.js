const {Schema, model} = require('mongoose')

const pedidoSchema = new Schema({
    cantidad: {type: Number, require: true},
    total: {type: Number, require: true},
    fecha_p: {type: Date, require: true},
    fecha_e: {type: Date, require: true},
    dispositivo:{
        type: String, require: true
    },
    user:{
        type: String, require: true
    }


},{
    timestamps:true, 
    versionKey:false
});
module.exports = model("Pedido", pedidoSchema);

