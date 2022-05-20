const express = require('express');
const { userModel } = require('../models');
const { handleHttpError } = require('../utils/handleErrors');
const { matchedData } = require('express-validator');




const getUser = async (req, res) => {
    // Get the user from the database 
    try {
        let data = req.body
        let errors =[]
        if(!data.email){
            errors.push({text:"El email es un campo requerido"})
        }
        if(!data.password){
            errors.push({text:"La password es un campo requerido"})
        }
        
        let user=await userModel.find({email: data.email,password: data.password});
        if(errors.length>0||user.length==0){
            if(user.length==0){
                errors.push({text:"Los datos ingresados no son correctos!"})
            }
            let emailUser = data.email
            let passwordUser = data.password
            console.log(errors)
            res.render("/login",{errors,emailUser,passwordUser})
        }
        else{res.send("ok")}
    } catch (error) {
       // handleHttpError(req,"ERROR_GET_USER")
       // console.log(error)
    }
}
const createUser = async(req, res) => {
    try {
    const {body} = req;
    const data = await userModel.create(body);
    res.send({data})
    }catch(error){
        //handleHttpError(req,"ERROR_CREATE_USER");
    }
}

module.exports = {getUser,createUser}