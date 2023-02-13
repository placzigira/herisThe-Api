const User= require('../Models/userSchema')
const bcrypt= require('bcrypt')
const jwt = require ('jsonwebtoken')
//  Signup Logic Goes Down here

const signup = async (req, res) =>{
    //  Get Data From User 
   const {
    Username,
    Firstname,
    Lastname,
    Email,
    Password,
    ProfilePic
   }= req.body

/*   Check If Information Below Is Provide 
   those information are : Username, firstname, lastname, email and password */
   if(Username && Firstname && Lastname && Email && Password)
   {
    try{
        // here we're going to hash the password so that it can't be viewed by everyone
        // using the bcrypt dependence to encrypt the password
       const salt= await bcrypt.genSalt(10);
       const hashedPwd= await bcrypt.hash(req.body.Password, salt) 

    //    saving the credentials and send it to Our Database  
       const newUser= await User.create({
        Username,
        Firstname,
        Lastname,
        Email,
        Password: hashedPwd,
        ProfilePic
       })

    /*   if the process went well the you've to respond 
    to the client with a certain Message And code status for browser */
       res.status(200).json({
        status:200,
        Message: "New User Registered!",
        data: newUser
       })
  
    }catch(err){
        // if in the error code is 11000 this means what you're trying to enter is already in 
        let message = "Something Went Wrong" 
     
          /* if something goes wrong you've to pull out error that 
       specifies well what happen and where */
// console.log(err)
      res.status(400).json({
        status:400,
        Message: message,
        Errors: err,
        
      })
    }
   } 
   /*if someone tries to  enter some information and 
   left other we've to tell'em that all information must be provided as well */
   else {
    res.status(401).json({
        status:401,
        Message: "Please Provide All Information",
    })
   }
}
// Login logic Goes Down Here 
/* So How's The Logic Structured. Since We Want
To Login There's Conditions We've To Pass 
1.Firstly We'll Need To Check If The Email That's 
Inserted If Matches With What We've In Our Database
 And If The Same Email Matches With It's Password As Well.

2.Secondly We've To Set The Token That Will Be Used To Authorize
The Authenticated User To What He Will Access 
  */
const login= async (req,res)=>{
    try{
        // here we're tracking whether the email in database matches with the entered one 
    const checkUser= await User.findOne({Username: req.body.Username})
    // if doesn't match we go throw the error 
    !checkUser && res.status(404).json({
        status: 404,
        Message: "Wrong Username"
    })
    /* but when the emails matched we'll check 
    again whether it's password meet with the one we're entering */

    const checkPwd= await bcrypt.compare(req.body.Password, checkUser.Password)
    // Unless The Password Is wrong 
    !checkPwd && res.status(404).json({
        status: 404,
        Message: "Wrong Password"
    })
    /* If The Credentials Entered Matches With What We've
     In Database We Need To Work Authorization By Token */

    const{Password, ...others}=checkUser._doc
    const token = jwt.sign({checkUser}, process.env.Secret,{expiresIn: "2h"})
    res.cookie('token', token, {maxAge: 7200 *1000, httpOnly: true})
    checkUser.token=token
    res.status(200).json({
        status: 200, 
        Message: "Valid Credentials",
        data: others,
        token
    })
    console.l
    }catch(err){
      console.log(err)
        res.status(404).json({
          status:404,
          Message: "Fail To Login",
          Errors: err
        })
      }
}
module.exports.signup= signup
module.exports.login= login