const mongoose= require('mongoose')
const User= new mongoose.Schema({
    Username: {
        type: String,
        unique: true,
        required: true,
    },
    Firstname:{
        type: String,
        unique: false,
        required: true,
    }, Lastname:{
        type: String,
        unique: false,
        required: true,
    },
    Email:{
        type: String,
        unique: true,
        required: true,
    },
    Password:{
        type: String,
        unique: false,
        required: true,
    },
    ProfilePic:{
        type: String,
        required: false    }
}, {timestamps: true})
module.exports= mongoose.model("User", User)