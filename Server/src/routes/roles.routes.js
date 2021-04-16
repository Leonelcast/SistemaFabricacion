const express = require('express');
const rolesController = require('../controllers/roles.controller');
const router = express.Router()


router.get('/:id', rolesController.getRol);
router.get('/', rolesController.getRoles);
router.post('/', rolesController.createRoles);
router.put('/:id', rolesController.updateRoles);
router.delete('/:id', rolesController.deleteRoles);

module.exports = router;