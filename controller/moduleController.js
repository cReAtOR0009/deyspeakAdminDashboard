const moduleService = require("../service/moduleService");
const constantResponses = require("../constants/index");


module.exports.getAllModules = async (req, res, next) => {
    let errors = [];
    response = constantResponses.defaultServerResponse;

    try {
        const responseFromService = await moduleService.getAllModules(req.query);
        response.message = constantResponses.moduleMessage.FETCHED;
        response.data = responseFromService;
        response.status = 200;
    } catch (error) {
        console.log("something went wrong with ModuleController: getAllModules");
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors;
        return res.render("error", {response});
    }
    
    return response.data
}