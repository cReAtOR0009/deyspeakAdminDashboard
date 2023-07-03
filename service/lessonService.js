const lessonModel = require("../database/models/lessonModel");
const { formatMongoData, checkObjectId} = require("../utils/formatMongoData");
const constantResponses = require("../constants/index");

module.exports.getAllLessons = async (skip=10, limit = 10) => {

    try {
        const lessons = await lessonModel.find({}).skip(parseInt(skip)).limit(parseInt(limit));

        if(!lessons) {
            throw new Error ("something went wrong with lessonService: getAllLessons ")
        }

        return formatMongoData(lessons);
    } catch (error) {
        console.log("something went wrong with lessonService: getAllLessons");
        throw new error
    }
}