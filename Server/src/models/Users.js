const {Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
nombre:{type: String, require: true},
email:{type: String, require: true},
password:{type: String, require: true},
roles: {
    type: Schema.Types.ObjectId, default: '60497a8ae2b1596118284fd4',
    ref: 'Roles'
}
});

userSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    }catch(error){
        next(error)
    }
})







module.exports = model("Users", userSchema);

