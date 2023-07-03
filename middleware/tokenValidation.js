const constants = require("../constants/index");
const jwt = require("jsonwebtoken");



module.exports.validateToken = (req, res, next) => {
    let response = { ...constants.defaultServerResponse };

    try {
        if (!req.headers.authorization) {
            throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
        }

        const token = req.headers.authorization.split('Bearer')[1].trim();
        const decode = jwt.verify(token, process.env.SECRET_KEY || 'my-secret');
        return next();

    } catch (error) {
        response.message = error;
        response.status = 401;
    }

    return res.status(response.status).send(response);
}