const constantResponses = require("../constants/index");
const jwt = require("jsonwebtoken");

module.exports.validateAdminToken = (req, res, next) => {
    const response = constantResponses.defaultServerResponse;

    try {
        if(!req.headers.authorization) {
            throw new Error(constantResponses.requestValidationMessage.TOKEN_MISSING)
        };

        const token = req.headers.authorization.split("Bearer")[1].trim();
        const decode = jwt.verify(token, process.env.SECRET_KEY || "my-secret");


        if(decode.role !=2){
            throw new Error(constantResponses.requestValidationMessage.USER_NOT_AUTHORIZED)
        }

        return next();

    } catch (error) {
        response.data = error;
        response.message = error;
        response.status= 400;
    }
    return res.status(response.status).send(response);
}