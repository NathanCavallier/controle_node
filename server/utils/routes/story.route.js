import { express } from 'express';
import { storyController } from '../controllers/story.controller';

const router = express.Router();

router.post('/', storyController.createStory);
router.get('/', storyController.getAllStories);
router.get('/:id', storyController.getStoryById);
router.put('/:id', storyController.updateStory);
router.delete('/:id', storyController.deleteStory)

export default router;