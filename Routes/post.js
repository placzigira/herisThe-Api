const routes= require('express').Router()
const PostModel= require('../Models/postSchema');
const cloudinary= require('../config/cloudinary')
const upload= require('../config/multer')
const verifyToken = require('../middleware/checkTok')
// CRUD OPERATION
// 1. CREATE

routes.post('/add',verifyToken, upload.single('image'), async(req,res)=>{
  try{
    const {
    Title,
    Description,
    Author,
    likes
    }= req.body
    console.log(process.env.CLOUD_KEY_SECRET)
    console.log(process.env.CLOUD_KEY)
    const result= cloudinary.uploader.upload(req.file.path,{
      folder: "Posts"
    })
    if(Title && Description  && likes)
    {
    const newPost= await PostModel.create({
      Title,
      Description,
      Image:  result.secure_url,
      Author,
      likes
    })
res.status(200).json({
  Status: 200,
  Message: "Posted Successfully",
  data: newPost
})
}else{
  res.status(409).json({
    status: 200,
    Message: "Some Information Need To Be Filled"

  })
}
  }catch(err){
    console.log(err)
    res.status(400).json({
      status:400,
      Message: " Add Post Failed",
      Errors: err
    })
  }
 
})

//  READ 
routes.get('/getpost',verifyToken, async(req,res)=>{
  try{
       const getPost= await PostModel.find()
       res.status(200).json({
        Status:200,
        Message: "Retrieved !",
        data: getPost
       })
  }catch(err){
    res.status(400).json({
      Status: 400,
      Message: "Failed",
      Errors: err
    })
  }
})
// UPDATE
routes.patch('/update/:id',verifyToken, async(req,res)=>{
  const {
    Title,
    Description,
    Author,
    likes
    }= req.body
  try{
    console.log(req.body);
const updatedPost= await PostModel.findOneAndUpdate({_id: req.params.id}, {
    Title,
    Description,
    Author,
    likes
  }
,{new: true})
console.log(updatedPost)
res.status(200).json({
  Status:200,
  Message: "Updated !",
  data: updatedPost
 })
  }catch(err){
    res.status(400).json({
      Status: 400,
      Message: "Failed",
      Errors: err
    })
  }
})
// DELETE
routes.delete('/delete/:id',verifyToken, async(req,res)=>{
  try{
  const postDelete= await PostModel.findByIdAndDelete(req.params.id)
  res.status(200).json({
    Status:200,
    Message: "Deleted!"
  })
  }catch(err){
    res.status(400).json({
      Status: 400,
      Message: "Failed",
      Errors: err
    })
  }
})
routes.get('/getsingle/:id',verifyToken, async(req,res)=>{
 try{
 const getOne= await PostModel.findById(req.params.id)
 res.status(200).json({
  Status: 200,
  Message: "Retrieved!",
  data: getOne
 })
 }catch(err){
    res.status(400).json({
      Status: 400,
      Message: "Failed",
      Errors: err
    })
  }
})
module.exports=routes