const mongoose = require('mongoose');

// schema = the blueprint of what your model will be
// here we have comments embedded and also 
const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
    }]
});

module.exports = mongoose.model('Post', postSchema)