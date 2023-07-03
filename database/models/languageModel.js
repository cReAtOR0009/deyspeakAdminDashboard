const mongoose = require("mongoose");

const languageSchema = mongoose.Schema({
    name: String,
    description: String,
    status: String,
}, {
    timestamps: true,
    toObject: {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});
module.exports = mongoose.model('Language', languageSchema);