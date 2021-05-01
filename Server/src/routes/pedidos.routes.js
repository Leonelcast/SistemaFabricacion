const express = require('express');
const pedidosController = require('../controllers/pedidos.controller.js');
const router = express.Router()


router.get('/:id', pedidosController.getPedido);
router.get('/', pedidosController.getPedidos);
router.post('/',pedidosController.createPedido2);
router.post('/:modelo',pedidosController.createPedido2);
router.put('/:id', pedidosController.updatePedido);
router.delete('/:id', pedidosController.deletePedido);
router.get('/read/aggregate', pedidosController.getAggregate);
router.get('/read/aggregate2', pedidosController.getAggregate2);
router.post('/enviar/mail',pedidosController.sendMail);
//router.get('/enviar/mail',pedidosController.getMail);

router.get('/buscar/:num',pedidosController.getNum);




module.exports = router;