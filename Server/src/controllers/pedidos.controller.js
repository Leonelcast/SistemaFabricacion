  
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

      let numserie = {num:  "F-" +newPedido.dispositivo + "/"+ num } ;
     
      newPedido.num_serie.push(numserie)


    

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



module.exports = pedidosController;