const lessonService = require("../service/lessonService");
const constantResponses = require("../constants/index");
const { response } = require("express");


module.exports.geAllLessons = async () => {
    let errors = [];
    response = constantResponses.defaultServerResponse;

    try {
        const responseFromService = await lessonService.getAllLessons(req.query);
        response.message = constantResponses.lessonMessage.LESSON_CREATED;
        response.data = responseFromService;
        response.status = 200;
    } catch (error) {
        console.log("something went wrong with lessonControlle: getAllLessons");
        response.status = 401;
        response.message = error.message;
        errors.push(error.message);
        response.data =errors;
        return res.render("error", {response});
    }
    return response.data;
}