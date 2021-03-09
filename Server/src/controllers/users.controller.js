const usersController = {}
const { Router } = require('express');
const Users = require('../models/users')
const jwt = require('jsonwebtoken');



usersController.getUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users)
}
//CREATE
usersController.createUsers = async  (req, res) => {
    const newUser = new Users(req.body);
    await newUser.save();
    const token = jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
    console.log(req.body)
    res.json('empleado creado')

}
usersController.SingIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({email})
    if (!user) return res.status(401).send("no existe");
    if (user.password !== password) return res.status(401).send('contraseña incorrecta');

    const token = jwt.sign({_id:user._id}, 'secretkey');
    res.status(200).json({token});
}

usersController.getUser = async (req, res) => {
   const user = await Users.findById(req.params.id)
    res.send(user)
}
//UPDATE
usersController.updateUsers = async (req, res) => {
    await Users.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Usuario actualizado'})
}

//DELETE
usersController.deleteUsers = async (req, res) => {
   await Users.findByIdAndDelete(req.params.id)
    res.json({status: 'Usuario eliminado'})

}

function verifytoken(req, res, next){
    
}

module.exports = usersController;
