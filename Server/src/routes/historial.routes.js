const express = require('express');
const historialController = require('../controllers/historial.controller.js');
const router = express.Router()
var app = express();

router.get('/:id', historialController.getHistorial);
router.get('/', historialController.getHistoriales);
router.post('/',historialController.createHistorial);
router.put('/:id', historialController.updateHistorial);
router.delete('/:id', historialController.deleteHistorial);



module.exports = router;