const rolesController = {}

const Roles = require('../models/Roles')


rolesController.getRoles = async (req, res) => {
    const roles = await Roles.find()
    res.json(roles)
}
//CREATE
rolesController.createRoles = async  (req, res) => {
    const newRoles = new Roles(req.body)
    await newRoles.save()
    console.log(req.body)

    res.json('Rol creado')
}

rolesController.getRol = async (req, res) => {
   const roles = await Roles.findById(req.params.id)
    res.send(roles)
}
//UPDATE
rolesController.updateRoles = async (req, res) => {
    await Roles.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Roles actualizado'})
}

//DELETE
rolesController.deleteRoles = async (req, res) => {
   await Roles.findByIdAndDelete(req.params.id)
    res.json({status: 'Roles eliminado'})

}

module.exports = rolesController;