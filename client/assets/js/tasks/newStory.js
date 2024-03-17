import { Story } from "../classes/story.class";
import { StoryService } from "../services/story.service";

let buttonSave = document.getquerySelector('#enregistrer');
let newStoryService = new StoryService();

buttonSave.addEventListener('click', async () => {
    let newStory = new Story();
    newStory.title = document.getquerySelector('#title').value;
    newStory.author = document.getquerySelector('#author').value;
    newStory.numberOfChapters = document.getquerySelector('#numberOfChapters').value;
    newStory.currentChapter = document.getquerySelector('#currentChapter').value;
    newStory.storyContent = document.getquerySelector('#storyContent').value;
    newStory.storyDescription = document.getquerySelector('#storyDescription').value;
    newStory.storyGenre = document.getquerySelector('#storyGenre').value;
    newStory.releaseYear = document.getquerySelector('#releaseYear').value;
    newStory.imageLink = document.getquerySelector('#imageLink').value;
    newStory.storyTags = document.getquerySelector('#storyTags').value;

    // Vérifier que tous les champs sont remplis
    if (!newStory.title || !newStory.author || !newStory.numberOfChapters || 
        !newStory.currentChapter || !newStory.storyContent || !newStory.storyDescription || 
        !newStory.releaseYear || !newStory.imageLink) {
        alert('Veuillez remplire tous les champs !');
        return;
    }

    // Vérifier si l'histoire existe déjà
    let existingStory = await newStoryService.getStoryByTitle(newStory.title);

    if (existingStory) {
        alert('Cette histoire existe déjà !');
        return;
    }

    // Enregistrer l'histoire dans la base de données
    let response = await newStoryService.saveStory(newStory);

    if (response.status == 200) {
        window.location.href = '/';
    } else {
        alert("Erreur lors de la création de l'histoire !");
    }
});