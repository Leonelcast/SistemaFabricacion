const dispositivosController = {}

const Dispositivos = require('../models/Dispositivos')


dispositivosController.getDispositivos = async (req, res) => {
    const dispositivos = await Dispositivos.find()
    res.json(dispositivos)
}
//CREATE
dispositivosController.createDispositivos = async  (req, res) => {
    const newDispositivo = new Dispositivos(req.body)
    await newDispositivo.save()
    console.log(req.body)

    res.send('empleado creado')
}

dispositivosController.getDispositivo = async (req, res) => {
   const dispositivo = await Dispositivos.findById(req.param.id)
    res.send(dispositivo)
}
//UPDATE
dispositivosController.updateDispositivos = async (req, res) => {
    await Dispositivos.findByIdAndUpdate(req.param.id, req.body)
    res.json({status: 'Dispositivo actualizado'})
}

//DELETE
dispositivosController.deleteDispositivos = async (req, res) => {
   await Dispositivos.findByIdAndDelete(req.param.id)
    res.json({status: 'Dispositivo eliminado'})

}

module.exports = dispositivosController;