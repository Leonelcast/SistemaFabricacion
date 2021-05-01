const express = require('express');
const serie = require('../controllers/serie.controller');
const router = express.Router()

router.get('/', serie.getSeries);
router.get('/:num', serie.getSeriename);
router.put('/:num', serie.updateSerie);



module.exports = router;