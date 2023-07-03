const constantResponses = require("../constants/index");
const adminService = require("../service/adminService");
const languageService = require("../service/languageService");
const moduleService = require("../service/moduleService");
const lessonService = require("../service/lessonService");

module.exports.adminlogin = async (req, res) => {
    let errors = [];
    let response = constantResponses.defaultServerResponse;

    try {
        const responseFromService = await adminService.loginAdmin(req.body);
        response.status = 200;
        response.data = responseFromService;
        response.message = constantResponses.adminMessage.ADMIN_LOGIN;

        return res.status(response.status).send(response);
    } catch (error) {
        console.log("Something went wrong:adminController : login");
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors;
        return res.render("error", {response});
    }
}

module.exports.adminDashboard = async (req, res, next) => {
    let errors = [];
    let response = constantResponses.defaultServerResponse;
 
    try {
        let languages = await languageService.getAllLanguage(req.query);
        let modules = await moduleService.getAllModules(req.query);
        let lessons = await lessonService.getAllLessons(req.query);
        response.status = 200;
        response.data ={languages,modules, lessons} ;
        response.message = constantResponses.languageMessage.LANGUAGE_FETCHED;

        return res.render("dashboard", {response});

    } catch (error) { 
        console.log("something went wrong with adminController: Dashboard");
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors;
        return res.render("error", {response});
    }
}