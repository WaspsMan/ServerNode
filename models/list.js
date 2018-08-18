const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    product: String,
    count: Number,
});

//Create the model class
const ModelClass = mongoose.model('list', listSchema);

//Export the model
module.exports = ModelClass;
