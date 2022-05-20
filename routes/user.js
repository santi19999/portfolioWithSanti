const express = require('express')
const {getUser,createUser} = require('../controllers/users')
const {validatorCreateItem,validatorGetItem} = require("../validator/user")
const router = express.Router()

router.post('/',getUser)
router.post("/create",validatorCreateItem,createUser)
module.exports =router