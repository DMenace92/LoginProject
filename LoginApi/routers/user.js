const express = require('express')
const User = require('../modules/users')
const auth = require('../middleWare/auth');
const privliges = require('../middleWare/privileges')
const Router = new express.Router()

Router.post('/users', async (req,res)=>{
    const user = new User(req.body)
  
    try{
        await user.save()
        const token = user.generateAuthToken()
        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
})
module.exports = Router;
