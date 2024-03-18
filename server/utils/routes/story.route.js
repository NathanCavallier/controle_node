const express = require('express');
const storyController = require('../controllers/story.controller');

const router = express.Router();

router.post('/', storyController.createStory);
router.get('/', storyController.getAllStories);
router.get('/:id', storyController.getStoryById);
router.put('/:id', storyController.updateStory);
router.delete('/:id', storyController.deleteStory)

module.exports = router;