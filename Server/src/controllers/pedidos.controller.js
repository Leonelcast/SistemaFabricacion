const pedidosController = {}

const Pedidos = require('../models/Pedidos')
const Dispositivos = require('../models/Dispositivos')


pedidosController.getPedidos = async (req, res) => {
    const pedidos = await Pedidos.find().populate('dispositivo').populate('cliente')
    res.json(pedidos)
}
//CREATE
pedidosController.createPedido = async  (req, res) => {
    const newPedido = new Pedidos(req.body); 
      await newPedido.save()
    console.log(req.body)
    res.json('pedido creado')
}

pedidosController.createPedido2 = async  (req, res) => {
    const newPedido = new Pedidos(req.body);
    newPedido.num_serie = [];   
    
    
    for(var i=1; i <= newPedido.cantidad ; i++){
     
      var num = Math.floor(Math.random() * (10000000000000 - 1000000000));

      let numserie =  "F-" +newPedido.dispositivo + "/"+ num  ;
     
      newPedido.num_serie.push(numserie);
      newPedido.num_serie.push("1");


    

   }

    await newPedido.save()
    console.log(req.body)
    res.json('pedido creado')
}

pedidosController.getPedido = async (req, res) => {
   const pedido = await Pedidos.findById(req.params.id);
    res.send(pedido)
}
//UPDATE
pedidosController.updatePedido = async (req, res) => {
    await Pedidos.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Pedido actualizado'})
}

//DELETE
pedidosController.deletePedido = async (req, res) => {
    await Pedidos.findByIdAndDelete(req.params.id)
   res.json({status: 'Pedido eliminado'})

}






pedidosController.getAggregate = async (req, res) => {
    const getAggregate = await Pedidos.aggregate([
        {

            "$lookup": {
                "from": "dispositivos",
                "localField": "dispositivo",
                "foreignField": "_id",
                "as": "dispositivoCol"
            }
        },
        {
            "$match": {
                "estado": "Empacando"
            }
        },
        {
            "$group": {
                "_id": "$fecha_p",
                "Dispositivo": {
                    "$push": "$dispositivoCol.modelo"
                },
                "cantidad": {
                    "$sum": "$cantidad"
                }
            }
        }

    ]).allowDiskUse(true);
    res.json(getAggregate)
}

pedidosController.getAggregate2 = async (req, res) => {
    const getAggregate2 = await Pedidos.aggregate([
        { 
            "$lookup" : { 
                "from" : "clientes", 
                "localField" : "cliente", 
                "foreignField" : "_id", 
                "as" : "clienteCol"
            }
        }, 
        { 
            "$replaceRoot" : { 
                "newRoot" : { 
                    "$mergeObjects" : [
                        { 
                            "$arrayElemAt" : [
                                "$clienteCol", 
                                0.0
                            ]
                        }, 
                        "$$ROOT"
                    ]
                }
            }
        }, 
        { 
            "$match" : { 
                "estado" : "Entregado"
            }
        }

    ]).allowDiskUse(true);
    res.json(getAggregate2)
}



module.exports = pedidosController;