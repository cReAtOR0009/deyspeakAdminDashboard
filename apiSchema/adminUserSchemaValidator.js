const Joi = require("joi");


const adminLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports.loginAdminSchema = adminLoginSchema;