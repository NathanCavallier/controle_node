import { Story } from '../models/story.model';

// Créer, lire, mettre à jour et supprimer des histoires

function getAllStories(req, res) {
    return Story.find({})
        .then((stories) => {
            return res.send(stories);
        })
        .catch((err) => {
            return res.status(500).send(err);
        });
}

function getStoryById(storyId) {
    return Story.findById(storyId.params.id)
    .then((story) => {
        return res.send(story);
    })
    .catch((err) => {
        return res.status(500).send(err);
    
    })
}

function createStory(req, res) {
    let newStory = new Story(req.body);
    newStory.save()
    .then((story) => {
        return res.send(story);
    })
    .catch((err) => {
        return res.status(500).send(err);
    })
}

function updateStory(req, res) {
    return Film.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true})
    .then((story) => {
        return res.send(story);
    })
    .catch((err) => {
        return res.status(500).send(err);
    })
}

function deleteStory(req, res) {
    return Story.deleteOne({_id: req.params.id})
    .then((story) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}


export default {
    getAllStories,
    getStoryById,
    createStory,
    updateStory,
    deleteStory,
}