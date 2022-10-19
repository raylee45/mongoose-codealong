const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    header: String,
    content: String,
    date: Date
});

module.exports = {
    model: mongoose.model('Comment', commentSchema),
    commentSchema
}