const Lullaby = require('../models/lullaby.model');


function getAllLullabies(req, res) {
    Lullaby.find({})
    .then((lullaby) => {
        return res.json(lullaby);
    })
    .catch((err) => {
        console.log(err);
        return res.sendStatus(500);
    });
}

function getOneLullaby(req, res) {
    Lullaby.findById(req.params.id)
    .then(function (lullaby) {
        res.json(lullaby);
    })
    .catch((err) => {
        console.log(err);
        return res.sendStatus(500);
    });
}

function createLullaby(req, res) {
    let newLullaby = new Lullaby(req.body);
    newLullaby.save()
    .then((lullaby) => {
        res.json(lullaby);
    })
    .catch((err) => {
        console.log(err);
        return res.json(err);
    });
}

function updateLullaby(req, res) {
    Lullaby.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true})
    .then((lullaby) => {
        res.json(lullaby);
    })
    .catch((err) => {
        console.log(err);
        return res.sendStatus(500);
    })
}

function deleteLullaby(req, res) {
    Lullaby.deleteOne({_id: req.params.id})
    .then((lullaby) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
        return res.sendStatus(500);
    })
}


module.exports = {
    getAllLullabies,
    getOneLullaby,
    createLullaby,
    updateLullaby,
    deleteLullaby
};