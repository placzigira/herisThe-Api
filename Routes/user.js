const route= require('express').Router()
const User= require('../Models/userSchema')
const bcrypt= require('bcrypt')
const verifyToken = require('../middleware/checkTok')

// Retrieve Users

route.get('/list',verifyToken,async(req,res)=>{
    try{
        const listPosts= await User.find()
        res.status(200).json({
            status: 200,
            data: listPosts
        })
    }catch(err){
       res.status(400).json({
        Status: 400,
        Message: "Request Failed",
        Error: err
       })
    }
  

})
route.get('/welcome', verifyToken, (req,res)=>{
    res.send("Hello World")
})
//  Update User
route.put('/update/:id', async (req,res)=>{
    if(req.body.Password){
        const salt= await bcrypt.genSalt(10)
        req.body.Password= await bcrypt.hash(req.body.Password, salt)
    }
  try{
    const updatedUser= await User.findByIdAndUpdate(req.params.id, {
        $set:{
            Username: req.body.Username,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Email: req.body.Email,
            Password: req.body.Password
        }
    },{new: true})
    res.status(200).json({
        status:200,
        Message: "User Updated !",
        data: updatedUser
       })
  }catch(err){
     res.status(400).json({
        status:400,
        Message: "Fail To Update",
        Errors: err
     })
     console.log(err)
  }
})

// Delete User 
route.delete('/delete/:id', async(req,res)=>{
    try{
        const deletedUser= await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        Status:200,
        Message: "Deleted !"
    })
    }catch(err){
     res.status(400).json({
        Status:400,
        Message: "Error In Deleting",
        Errors: err
     })
    }
})

// Fetching By Id

route.get('/list/:id', async (req,res)=>{
    try{
        const getbyId= await User.findById(req.params.id)
        const{Password, ...others}= getbyId._doc
        res.status(200).json({
            status:200,
            Message: "Fetched !",
            data: others
           })
    }catch(err){
        res.status(400).json({
            status:400,
            Message: "fail to fetch",
           Error:err
           
           })
    }
})
module.exports= route