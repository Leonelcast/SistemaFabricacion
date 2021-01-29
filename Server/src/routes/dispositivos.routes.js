const express = require('express');
const dispositivosController = require('../controllers/dispositivos.controller.js');
const router = express.Router()


router.get("/:id", dispositivosController.getDispositivo);
router.get("/", dispositivosController.getDispositivos);
router.post("/", dispositivosController.createDispositivos);
router.put("/:id", dispositivosController.updateDispositivos);
router.delete("/:id", dispositivosController.deleteDispositivos);

module.exports = router;