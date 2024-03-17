import { Story } from "../classes/story.class";
import { StoryService } from "../services/story.service";

let buttonSave = document.getElementById('buttonSave');
let newStoryService = new StoryService();

buttonSave.addEventListener('click', async () => {
    let newStory = new Story();
    newStory.title = document.getElementById('title').value;
    newStory.author = document.getElementById('author').value;
    newStory.numberOfChapters = document.getElementById('numberOfChapters').value;
    newStory.currentChapter = document.getElementById('currentChapter').value;
    newStory.storyContent = document.getElementById('storyContent').value;
    newStory.storyDescription = document.getElementById('storyDescription').value;
    newStory.storyGenre = document.getElementById('storyGenre').value;
    newStory.releaseYear = document.getElementById('releaseYear').value;
    newStory.imageLink = document.getElementById('imageLink').value;
    newStory.storyTags = document.getElementById('storyTags').value;

    // Vérifier que tous les champs sont remplis
    if (!newStory.title || !newStory.author || !newStory.numberOfChapters || 
        !newStory.currentChapter || !newStory.storyContent || !newStory.storyDescription || 
        !newStory.releaseYear || !newStory.imageLink) {
        alert('Veuillez remplir tous les champs !');
        return;
    }

    // Check if story already exists
    let existingStory = await newStoryService.getStoryByTitle(newStory.title);

    if (existingStory) {
        alert('Cette histoire existe déjà !');
        return;
    }

    // Create story in database

    // Save story to database

    let response = await newStoryService.saveStory(newStory);

    if (response.status == 200) {
        window.location.href = '/';
    } else {
        alert("Erreur lors de la création de l'histoire !");
    }
});