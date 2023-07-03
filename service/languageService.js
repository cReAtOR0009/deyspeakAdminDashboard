// const mongoose = require("mongoose");
const languageModel = require("../database/models/languageModel");
const { formatMongoData, checkObjectId } =  require("../utils/formatMongoData");
const constantResponses = require("../constants/index");

module.exports.createLanguage = async (servicedata) => {

    try {
        const language_Exist =await languageModel.findOne({name: servicedata.name });
        if(language_Exist){
            throw new Error(constantResponses.languageMessage.LANGUAGE_DUPLICATE)
        }
        
        let newLanguage = new languageModel({...servicedata});
        let result = await newLanguage.save();

        return formatMongoData(result); 
    } catch (error) {
        console.log("something went wrong with languageService: createLanguage");
        throw new Error(error);
    }
};

module.exports.getAllLanguage = async (skip= 0, limit=15) => {
        try {
            
            let languages = await languageModel.find({}).skip(parseInt(skip)).limit(parseInt(limit));

            if(!languages) {
                throw new Error(constantResponses.languageMessage.LANGUAGE_NOT_FOUND)
            }

            return formatMongoData(languages);
        } catch (error) {
            console.log('something went wrong with languageService: getAllLanguage');
            throw new Error(error);
        }
}

module.exports.getLanguageById = async ({ id }) => {
    
    try {
         checkObjectId(id);

         let language = languageModel.findById(id);

         if(!language) {
            throw new Error(constantResponses.languageMessage.LANGUAGE_NOT_FOUND);
         };

         return formatMongoData(language);

        let 
    } catch (error) {
        console.log('something went wrong with languageService: getAllLanguagebyId');
        throw new Error(error);
    }
}

module.exports.findLanguageByName = async ({ languageName }) => {

    try {
        let language =await languageModel.find({name:languageName});

        if(!language) {
            throw new Error(constantResponses.languageMessage.LANGUAGE_NOT_FOUND);
        }

        return formatMongoData(language);

    } catch (error) {

        console.log('something went wrong with languageService: searchLanguageByName');

        throw new Error(error);
    }
    
};

module.exports.updateLanguage = async ( {id, updateInfo} ) => {

    try {
        checkObjectId(id);

        let language = await languageModel.findByIdAndUpdate({ _id: id }, updateInfo, {
            new: true
        });

        if(!language) {
            throw new Error (constantResponses.languageMessage.LANGUAGE_NOT_FOUND);
        }

        return formatMongoData(language);

    } catch (error) {
        console.log('something went wrong with languageService: updateLanguage');

        throw new Error(error);
    }
};

module.exports.deleteLanguage = async ( {id}) => {

    try {
        checkObjectId(id);

        let language =await languageModel.findByIdAndDelete(id);

        if(!language) {
            throw new Error (constantResponses.languageMessage.LANGUAGE_NOT_FOUND);
        }

        return formatMongoData(language)

    } catch (error) {
        console.log('something went wrong with languageService: deleteLanguage');

        throw new Error(error);
    }
}