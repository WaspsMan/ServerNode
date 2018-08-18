const List = require('../models/list');

exports.name = function (req, res, next) {
    List.find({}, function(err, data){
        if(err) { next(err) };
        return res.json(data)
    })
}

exports.postList = function(req, res, next) {
    const { name, count, type } = req.body;

    const list = new List({
        name: name,
        count: count,
        typed: {
            type: type
        }
    })

    if(!list.name || !list.count){
        return res.status(422).send({ error: 'You must provide name and count'})
    }
    
    list.save(function (err) {
        if (err) { return next(err) }

        List.find({}, function(err, data){
            if (err) { return next(err) }

            return res.json(data)
        })
    });
}