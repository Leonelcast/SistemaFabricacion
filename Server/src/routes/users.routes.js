const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router()


router.get('/:id', usersController.getUser);
router.get('/', usersController.getUsers);
router.post('/', usersController.createUsers);
router.post('/signIn', usersController.SingIn);
router.put('/:id', usersController.updateUsers);
router.delete('/:id', usersController.deleteUsers);
router.get('/roles', usersController.getRol);


module.exports = router;