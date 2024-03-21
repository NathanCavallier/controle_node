import { StoryService } from "./story.service.js";


let listeStories = document.querySelector('#storyList');
const s_service = new StoryService();

s_service.getAllStories(listeStories);