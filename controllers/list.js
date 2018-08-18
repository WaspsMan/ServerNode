const List = require('../models/list');

exports.name = function (req, res, next) {
    List.find({}, function(err, data){
        if(err) { next(err) };
        return res.json(data)
    })
}