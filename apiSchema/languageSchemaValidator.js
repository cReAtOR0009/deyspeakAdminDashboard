const Joi = require("joi");

const languageSchema = Joi.object({
    name: Joi.string().required(),
    description:Joi.string().required(),
});

module.exports.createLanguage = languageSchema;

const languageQueryParamsSchema = Joi.object({
    skip:Joi.string(),
    limit:Joi.string(),
    name:Joi.string(),
});

module.exports.getLanguageQueryParams = languageQueryParamsSchema;

const updateLanguageShema = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
});

module.exports.updateLanguageSchema = updateLanguageShema;