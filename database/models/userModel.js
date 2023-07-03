const mongoose = require('mongoose');

const userLanguageSchema = mongoose.Schema({
    language: String,
    status: String,
    rank: Number,
    level: Number,
    module: Number,
});


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: String,
    nationality: String,
    role: Number,
    avatar:{type:String, default:"image"}, // "image" should be substituted for default image, if user is yet to upload image
    languages: [userLanguageSchema]
}, {
    timestamp: true,
    toObject: {
        transform: (doc, ret, options) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password
            return ret;

        }
    }
});

module.exports = mongoose.model('User', userSchema);