const moduleModel = require("../database/models/moduleModel");
const { formatMongoData, checkObjectId} = require("../utils/formatMongoData");
const constantResponses = require("../constants/index");


module.exports.getAllModules = async ( skip=0, limit = 15 ) => {

    try {
        const modules = await moduleModel.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        if (!modules) {
            throw new Error(constantResponses.moduleMessage.NOT_FOUND);
        }
        
        return formatMongoData(modules);
    } catch (error) {
        console.log('something went wrong with moduleService: getAllmodules');
        throw new Error(error);
    }

}