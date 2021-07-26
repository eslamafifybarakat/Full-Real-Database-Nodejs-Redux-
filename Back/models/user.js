const mongoose = require('mongoose')
var validator = require('validator');
const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:true, //No Repeat
        dropDups:true,
        trim:true,
        lowercase:true,
        validate(val){
            if(!validator.isEmail(val))
            throw new Error("E-mail Not Valid")
        }
    },
    image:{
        type: String,
        required:true
    }
})

module.exports = User