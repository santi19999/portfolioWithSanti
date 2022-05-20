const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")



const validatorCreateItem = [
    check("nombre")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:8,max:16}),
    check("role")
    .exists()
    .notEmpty(),
    (req, res, next) => validateResults(req,res,next)
    
]
const validatorGetItem = [
    check("email")
    .exists()
    .isEmail(),
    check("password")
    .exists()
    .isLength({min:8,max:16}),
    (req, res, next) => validateResults(req,res,next)
]
module.exports={validatorCreateItem,validatorGetItem}
