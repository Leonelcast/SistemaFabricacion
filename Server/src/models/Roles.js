const {Schema, model} = require('mongoose')


const rolesSchema = new Schema({
roles: String
});









module.exports = model("Roles", rolesSchema);
