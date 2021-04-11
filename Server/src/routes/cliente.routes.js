const express = require('express');
const clienteC = require('../controllers/cliente.controller');
const router = express.Router()


router.get('/:id', clienteC.getCliente);
router.get('/', clienteC.getClientes);
router.post('/', clienteC.createCliente);
router.put('/:id', clienteC.updateCliente);
router.delete('/:id', clienteC.deleteCliente);


module.exports = router;