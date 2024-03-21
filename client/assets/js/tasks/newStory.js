import { Story } from "../classes/story.class";
import { StoryService } from "../services/story.service";

let buttonSave = document.querySelector('#enregistrer');
let imageInput = document.querySelector('#upload-image');
let newStoryService = new StoryService();
let formData = new FormData();


imageInput.addEventListener('change', () => {
    formData.append('image', imageInput.files[0]);
    newStoryService.saveImage(formData)
        .then((response) => {
        document.querySelector('#uploaded-image').value = response;
        }) 
        .catch((error) => {
            console.log(error);
        });
});

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
    newStory.imageLink = document.querySelector('#uploaded-image').value;

    // Vérifier que tous les champs sont remplis
    if (!newStory.title || !newStory.author || !newStory.numberOfChapters ||
        !newStory.storyContent || !newStory.storyDescription ||
        !newStory.releaseYear) {
        alert('Veuillez remplire tous les champs !');
        return;
    }

    let isExistingStory = newStoryService.getStoryById(newStory.title);

    if (isExistingStory) {
        alert('Cette histoire existe déjà !');
        return;
    }

    let response = newStoryService.createStory(newStory);
    response.then(() => {
        newStory.title = '';
        newStory.author = '';
        newStory.numberOfChapters = '';
        newStory.currentChapter = '';
        newStory.storyContent = '';
        newStory.storyDescription = '';
        newStory.storyGenre = '';
        newStory.releaseYear = '';

    });

    if (response.status == 200) {
        window.location.href = '/';
    } else {
        alert("Erreur lors de la création de l'histoire !");
    }
});