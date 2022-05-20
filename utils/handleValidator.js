const {validationResult} = require("express-validator")


/**
 * If the validationResult(req) is valid, then continue to the next middleware, otherwise, send a 403
 * status code and the errors array.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The validationResult() function returns an object with a throw() method.
 */
const validateResults = (req, res,next)=>{
    try {
        validationResult(req).throw();
        return next();//Continua hacia el controlador
    } catch (error) {
        res.status(403)
        res.send({errors: error.array()})
    }
}

module.exports = validateResults;