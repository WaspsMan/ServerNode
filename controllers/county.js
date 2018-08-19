const County = require('../models/county');

exports.name = function (req, res, next) {
    County.find({}, function(err, data){
        if(err) { next(err) };
        res.json(data)
    })
}

exports.amphoes = function(req, res, next) {
    County.findById({_id: req.params.id}, function(err, data){
        if (err) { return next(err) }
        res.json(data)
    });
}
// exports.postCounty = function(req, res, next) {
//     const { name, count, type } = req.body;

//     const county = new County({
//         name: name,
//         count: count,
//         typed: {
//             type: type
//         }
//     })

//     if(!county.name || !county.count){
//         return res.status(422).send({ error: 'You must provide name and count'})
//     }
    
//     county.save(function (err) {
//         if (err) { return next(err) }

//         County.find({}, function(err, data){
//             if (err) { return next(err) }

//             return res.json(data)
//         })
//     });
// }