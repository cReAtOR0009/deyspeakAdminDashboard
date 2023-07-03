const Joi = require("joi");
const constantResponses = require("../constants/index");

const validateObjectSchema = (data, schema) => {

   const result = schema.validate(data);
    //console.log("Joi Schema Result:", result.error.details);

    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path,
            };
        });

        return errorDetails;
    }

    return null;

};

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        const error = validateObjectSchema(req.body, schema);
        let response = constantResponses.defaultServerResponse;

        console.log(error);

        if (error) {
            response.data = error;
            response.message = constantResponses.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}

module.exports.validateQueryParams = (schema) => {
    return (req, res, next) => {
        const error = validateObjectSchema(req.query, schema);
        let response = { ...constantResponses.defaultServerResponse };

        console.log(error);

        if (error) {
            response.data = error;
            response.message = constantResponses.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}

module.exports.validateFile = (schema) => {
    return (req, res, next) => {
        const error = validateObjectSchema(req.body, schema);
        const response = constantResponses.defaultServerResponse;

        if(error) {
            response.data = error;
            response.message = constantResponses.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response)
        }
        return next()
    }
}