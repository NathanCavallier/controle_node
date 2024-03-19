import { StoryService } from "../services/story.service";


let listeStories = document.querySelector('#storyList');
const s_service = new StoryService();

s_service.getAllStories(listeStories);