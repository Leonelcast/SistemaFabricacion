const clienteController = {}

const Cliente = require('../models/Cliente')

clienteController.getClientes = async (req, res) => {
    const cliente = await Cliente.find()
    res.json(cliente)
}
//CREATE
clienteController.createCliente = async  (req, res) => {
    const newCliente = new Cliente(req.body)
    await newCliente.save()
    console.log(req.body)

    res.json('empleado creado')
}
//individual
clienteController.getCliente = async (req, res) => {
   const cliente = await Cliente.findById(req.params.id)
    res.send(Cliente)
}
//UPDATE
clienteController.updateCliente = async (req, res) => {
    await Cliente.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Dispositivo actualizado'})
}

//DELETE
clienteController.deleteCliente = async (req, res) => {
   await Cliente.findByIdAndDelete(req.params.id)
    res.json({status: 'Cliente eliminado'})

}

module.exports = clienteController;