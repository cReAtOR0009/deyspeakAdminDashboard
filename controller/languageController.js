const { response } = require("express");
const constantResponses = require("../constants/index");
const languageService = require("../service/languageService");
const {formatMongoData, checkObjectId} = require("../utils/formatMongoData")


module.exports.createLanguage = async (req, res, next) => {
        let response = constantResponses.defaultServerResponse;
        let errors = [];

    try {
        const responseFromService = await languageService.createLanguage(req.body);
        response.status = 200;
        response.message = constantResponses.languageMessage.LANGUAGE_CREATED;
        response.data = responseFromService;
    } catch (error) {
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors
        return res.render("error", {response})
    };
    res.render("dashboard", {languages:[]});
};

module.exports.getAllLanguages = async (req, res, next) => {
        let  response = constantResponses.defaultServerResponse;
        let errors = [];

    try {
        const responseFromService = await languageService.getAllLanguage(req.query);
        response.status = 200;
        response.message = constantResponses.languageMessage.LANGUAGE_FETCHED;
        response.data = responseFromService;
    } catch (error) {
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors;
        return res.render("error", {response})
    };
    return [...response.data];
    // return res.render("dashboard", {languages: response.data, info:"dummy token fron languagecontroller"});
};

module.exports.findLanguageByName = async ( req, res, next ) => {
        let response = constantResponses.defaultServerResponse;
        let errors = [];

    try {
        const responseFromService = await languageService.findLanguageByName({languageName:req.params.name});
        response.status = 200;
        response.message = constantResponses.languageMessage.LANGUAGE_FOUND;
        response.data = responseFromService;
    } catch (error) {
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors;
        return res.render("error", {response});
    }

    res.status(response.status).render("dashboard", {languages:response.data, info:"dummy token fron languagecontroller"})
}

module.exports.updateLanguage = async (req, res, next) => {
        let response = constantResponses.defaultServerResponse;
        let errors = [];
    try {
        const responseFromService = await languageService.updateLanguage({id:req.params.id, updateInfo:req.body});
        console.log(responseFromService);
        response.status = 200;
        response.message = constantResponses.languageMessage.LANGUAGE_FOUND;
        response.data = responseFromService;

    } catch (error) {
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors;
        return res.render("error", {response});
    }
    res.status(response.status).render("dashboard", {languages:response.data, info:constantResponses.languageMessage.LANGUAGE_UPDATED})

}

module.exports.deleteLanguage = async ( req, res, next) => {
        let response = constantResponses.defaultServerResponse;
        let errors = [];
    try {
        const responseFromService = await languageService.deleteLanguage(req.params);

        console.log("responseFromService", responseFromService);

        response.status = 200;
        response.message = constantResponses.languageMessage.LANGUAGE_DELETED;
        response.data = responseFromService;
    } catch (error) {
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors;
        return res.render("error", {response});
    }
    res.render("dashboard", {languages:response.data, info:constantResponses.languageMessage.LANGUAGE_DELETED})
}