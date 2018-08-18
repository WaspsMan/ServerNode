const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    type: String,
});
const listSchema = new Schema({
    name: String,
    count: Number,
    typed: [typeSchema]
});

listSchema.pre('save', function(next) {
    next();
});

//Create the model class
const ModelClass = mongoose.model('list', listSchema);

//Export the model
module.exports = ModelClass;
