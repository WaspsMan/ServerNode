const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String,
    count: Number,
});

listSchema.pre('save', function(next) {
    next();
});

//Create the model class
const ModelClass = mongoose.model('list', listSchema);

//Export the model
module.exports = ModelClass;
