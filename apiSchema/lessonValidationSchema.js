const Joi = require("joi")
Joi.objectId = require('joi-objectid')(Joi)


module.exports.createLessonsSchema = Joi.object({
    name: Joi.string().required(),
    order: Joi.number().required(),
    details: Joi.string().required(),
    flash_content_one: Joi.string().required(),
    flash_content_two: Joi.string(),
    flash_image: Joi.string(),
    module_id: Joi.objectId().required(),
    status: Joi.boolean().required(),
    order: Joi.number().required(),
    lessons_items: Joi.array(),

});


const LessonsSchemaUpdate = Joi.object({
    name: Joi.string(),
    order: Joi.number(),
    details: Joi.string(),
    flash_content_one: Joi.string(),
    flash_content_two: Joi.string(),
    flash_image: Joi.string(),
    module_id: Joi.objectId(),
    status: Joi.boolean(),
    order: Joi.number(),
    lessons_items: Joi.array(),

});

module.exports.updateLessonsSchema = LessonsSchemaUpdate;

const schemaAll = Joi.object({
    skip: Joi.string(),
    limit: Joi.string(),
});

module.exports.getAllLessonsSchema = schemaAll;
