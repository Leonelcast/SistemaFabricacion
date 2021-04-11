const historialController = {}

const Historial = require('../models/Historial')



historialController.getHistoriales = async (req, res) => {
    const historial = await Historial.find()
    res.json(historial)
}

historialController.getHistorial = async (req, res) => {
    const historial = await Historial.findById(req.params.id);
     res.send(historial)
 }
//CREATE
historialController.createHistorial = async  (req, res) => {
    const newHistorial = new Historial(req.body)
    await newHistorial.save()
    console.log(req.body)

    res.json('pedido creado')
}


//UPDATE
historialController.updateHistorial = async (req, res) => {
    await Historial.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Pedido actualizado'})
}

//DELETE
historialController.deleteHistorial = async (req, res) => {
   await Historial.findByIdAndDelete(req.params.id)
    res.json({status: 'Pedido eliminado'})

}
/*
historialController.truncateh = async (req,res)=>{
   await Historial.deleteMany({});
   res.json({status: 'Se elimino todo'});
}
*/



module.exports = historialController;