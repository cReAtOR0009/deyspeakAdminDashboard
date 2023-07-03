const mongoose = require('mongoose');
const constantResponses = require('../constants/index');


module.exports.formatMongoData = (data) => {

    if (Array.isArray(data)) {
        let convertedArray = [];
        for (value of data) {
            // console.log(value);
            convertedArray.push(value.toObject());
        }
        return convertedArray;
    }
    return data.toObject();
}

module.exports.checkObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constantResponses.databaseMessage.INVALID_ID);
    }
}