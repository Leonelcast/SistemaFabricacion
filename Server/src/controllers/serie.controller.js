const serieController = {}

const Serie = require('../models/Serie')

serieController.getSeries = async (req, res) => {
    const serie = await Serie.find().populate('dispositivo').populate('cliente')
    res.json(serie)
}



serieController.getSeriename = async (req, res) => {
    const serie = await Serie.find({'num_serie': req.params.num}).populate('dispositivo').populate('cliente')
    
    res.json(serie)
}

serieController.updateSerie = async (req, res) => {


    await Serie.findById(req.params.id, req.body)
    res.json({status: 'Pedido actualizado'})
}



module.exports = serieController;