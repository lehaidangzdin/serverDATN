const Joi = require("joi")

const validateLogin = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(3).max(10).required()
})
const validateRegister = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(3).max(10).required()
})


module.exports = {validateLogin, validateRegister}