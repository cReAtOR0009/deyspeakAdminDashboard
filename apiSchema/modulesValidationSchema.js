const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)

module.exports.createModuleSchema = Joi.object({
    name: Joi.string().required(),
    points: Joi.number().required(),
    details: Joi.string().required(),
    success_percentage: Joi.number().required(),
    level: Joi.object().required(),
    status: Joi.boolean().required(),
    order: Joi.number().required(),
    icon: Joi.string().required(),
    language_id: Joi.objectId(),
})


const moduleSchemaUpdate = Joi.object({
    name: Joi.string(),
    points: Joi.number(),
    details: Joi.string(),
    success_percentage: Joi.number(),
    level: Joi.object(),
    status: Joi.boolean(),
    order: Joi.number(),
    icon: Joi.string(),
    language_id: Joi.objectId(),
    lessons: Joi.array()
});

module.exports.updateModuleSchema = moduleSchemaUpdate;

const schemaAll = Joi.object({
    skip: Joi.string(),
    limit: Joi.string(),
});

module.exports.getAllModuleSchema = schemaAll;
