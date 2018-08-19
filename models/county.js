const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    pid: String,
    name: String,
    changwat_pid: String
});
const countySchema = new Schema({
    pid: String,
    name: String,
    amphoes: [typeSchema]
});

countySchema.pre('save', function(next) {
    next();
});

//Create the model class
const ModelClass = mongoose.model('countys', countySchema);

//Export the model
module.exports = ModelClass;
