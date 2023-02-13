const route= require('express').Router()
const bcrypt= require('bcrypt')
// const User= require('../Models/userSchema')
const User = require('../Models/userSchema')
const controller = require('../controllers/conts')
const jwt = require ('jsonwebtoken')

// Register New User && SIGNUP



route.post('/signup', controller.signup )

// lOGIN 

route.post('/login', controller.login)

route.get('/logout', (req, res) => {
  res.cookie('token', '', {maxAge: 0});
  res.status(200).json({message: "logged out"})
})
module.exports = route