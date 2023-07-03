const { object } = require('joi');
const mongoose = require('mongoose');


const lessonEmbeddedSchema = mongoose.Schema({
    name: String,
    id: mongoose.Schema.Types.ObjectId,
    order: Number,
});


const moduleSchema = mongoose.Schema({
    name: String,
    points: Number,
    details: String,
    success_percentage: Number,//TODO: confirm if to be remove
    level: Object,//every module is associated to a level
    status: Boolean,//module can be active (true) or inactive (false)
    order: Number,
    icon: String,
    language_id: mongoose.Schema.Types.ObjectId,
    lessons: [lessonEmbeddedSchema],

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

module.exports = mongoose.model('Module', moduleSchema);