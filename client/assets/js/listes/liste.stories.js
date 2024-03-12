import { StoryService } from "../services/story.service";


let tbody = document.querySelector('#storyList');
const story = new StoryService();

story.getAll(tbody);