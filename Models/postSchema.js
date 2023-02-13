const mongoose= require('mongoose')
const Post= new mongoose.Schema({
    Title:{
        type: String,
        unique: false,
        required: true
     },
     Description:{
        type: String,
        unique: false,
        required: true,
    },
    Image:{
       
        type:String,
        required:true
    },
   Author:{
        type:String,
        unique: false,
       required: true,
       
    } ,
    likes:{
        type: Number,
        default: 0
    }
}, {timestamps: true})
module.exports= mongoose.model("post", Post)