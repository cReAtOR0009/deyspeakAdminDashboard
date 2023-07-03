const mongoose = require('mongoose');

const lessonItemsEmbeddedSchema = mongoose.Schema({
    name: String,
    id: mongoose.Schema.Types.ObjectId,
    order: Number,
});

const lessonSchema = mongoose.Schema({
    name: String,
    order: Number,//this is used to order the lesson
    details: String,
    flash_content_one: String,
    flash_content_two: String,
    flash_image: String,
    icon: String,
    status: Boolean,
    module_id: mongoose.Schema.Types.ObjectId,
    lesson_items: [lessonItemsEmbeddedSchema],
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
module.exports = mongoose.model('Lesson', lessonSchema);