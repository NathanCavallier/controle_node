import { StoryService } from "../listes/story.service";
import { Story } from "../classes/story.class";


let title = document.querySelector("#title");
let releaseYear = document.querySelector("#releaseYear");
let author = document.querySelector("#author");
let storyGenre = document.querySelector("#storyGenre");
let storyDescription = document.querySelector("#storyDescription");
let storyContent = document.querySelector("#storyContent");
let chapterName = document.querySelector("#chapterName");
let imageLink = document.querySelector("#imageLink");

let storyId = window.location.hash.substring(1);
let storyService = new StoryService();

let story = storyService.getStoryById(storyId);
story.then((story) => {
    title.value = story.title;
    releaseYear.value = story.releaseYear;
    author.value = story.author;
    storyGenre.value = story.storyGenre;
    storyDescription.value = story.storyDescription;
    storyContent.value = story.storyContent;
    chapterName.value = story.chapterName;
    imageLink.value = story.imageLink;
})
    .catch((error) => {
        alert("Une erreur s'est produite lors du chargement de l'histoire !");
        console.log(error);
    });

// Pour mettre à jour l'image
let imageInput = document.querySelector('#upload-image');
let formData = new FormData();
imageInput.addEventListener('change', (e) => {
    formData.append('image', imageInput.files[0]);
    storyService.uploadImage(formData)
        .then((response) => {
            imageLink.value = response;
        })
        .catch((error) => {
            alert("Une erreur s'est produite lors de la mise à jour de l'image !");
            console.log(error);
        });
});

let saveButton = document.querySelector("#enregistrer");
saveButton.addEventListener("click", () => {
    let updatedStory = new Story(storyId, title.value, releaseYear.value, author.value, storyGenre.value, storyDescription.value, storyContent.value, chapterName.value, imageLink.value);
    storyService.updateStory(updatedStory)
        .then(() => {
            alert("L'histoire a été mise à jour avec succès !");
        })
        .catch((error) => {
            alert("Une erreur s'est produite lors de la mise à jour de l'histoire !");
            console.log(error);
        });
});

