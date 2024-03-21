import { Story } from "../classes/story.class";
import { StoryService } from "../services/story.service";

let buttonSave = document.querySelector('#enregistrer');
let newStoryService = new StoryService();

buttonSave.addEventListener('click', async () => {
    let newStory = new Story();
    newStory.title = document.querySelector('#title').value;
    newStory.author = document.querySelector('#author').value;
    newStory.numberOfChapters = document.querySelector('#numberOfChapters').value;
    newStory.currentChapter = document.querySelector('#currentChapter').value;
    newStory.storyContent = document.querySelector('#storyContent').value;
    newStory.storyDescription = document.querySelector('#storyDescription').value;
    newStory.storyGenre = document.querySelector('#storyGenre').value;
    newStory.releaseYear = document.querySelector('#releaseYear').value;
    newStory.imageLink = document.querySelector('#imageLink').value;

    // Vérifier que tous les champs sont remplis
    if (!newStory.title || !newStory.author || !newStory.numberOfChapters ||
        !newStory.storyContent || !newStory.storyDescription ||
        !newStory.releaseYear) {
        alert('Veuillez remplire tous les champs !');
        return;
    }

    // Vérifier si l'histoire existe déjà
    let existingStory = newStoryService.getStoryById(newStory.title);

    if (existingStory) {
        alert('Cette histoire existe déjà !');
        return;
    }

    // Enregistrer l'histoire dans la base de données
    let response = newStoryService.createStory(newStory);

    if (response.status == 200) {
        window.location.href = '/';
    } else {
        alert("Erreur lors de la création de l'histoire !");
    }
});