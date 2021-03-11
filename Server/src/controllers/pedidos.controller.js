const pedidosController = {}

const Pedidos = require('../models/Pedidos')


pedidosController.getPedidos = async (req, res) => {
    const pedidos = await Pedidos.find()
    res.json(pedidos)
}
//CREATE
pedidosController.createPedido = async  (req, res) => {
    const newPedido = new Pedidos(req.body)
    await newPedido.save()
    console.log(req.body)

    res.json('pedido creado')
}

pedidosController.getPedido = async (req, res) => {
   const pedido = await Pedidos.findById(req.params.id)
    res.send(pedido)
}
//UPDATE
pedidosController.updatePedido = async (req, res) => {
    await Pedidos.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Pedido actualizado'})
}

//DELETE
pedidosController.deletePedido = async (req, res) => {
   await Pedido.findByIdAndDelete(req.params.id)
    res.json({status: 'Pedido eliminado'})

}

module.exports = pedidosController;