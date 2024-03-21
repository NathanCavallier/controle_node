import { Story } from "../classes/story.class";
import { StoryService } from "../services/story.service";

let storyTitle = document.getElementById("bookName");
let currentChapter = document.getElementById("currentChapter");
let storyContent = document.getElementById("storyContent");
let storyImage = document.getElementById("storyImage");

let storyService = new StoryService();
let _id = window.location.hash.substring(1);
let story = storyService.getStoryById(_id);

story.then((story) => {
    storyTitle.innerHTML = story.title;
    currentChapter.innerHTML = story.currentChapter;
    storyContent.innerHTML = story.content;
    storyImage.src = story.image;
    storyImage.alt = story.title;
    storyImage.title = story.title;
    storyImage.style.display = "block";
});

// Bouton pour passer au chapitre suivant
let nextChapterButton = document.getElementById("nextChapterButton");
nextChapterButton.addEventListener("click", () => {
    let nextChapter = storyService.getStoryById(_id);
    nextChapter.then((chapter) => {
        storyTitle.innerHTML = chapter.title;
        currentChapter.innerHTML = chapter.currentChapter;
        storyContent.innerHTML = chapter.content;
        storyImage.src = chapter.image;
        storyImage.alt = chapter.title;
        storyImage.title = chapter.title;
        storyImage.style.display = "block";
    });
        storyTitle.innerHTML = "Fin de l'histoire";
        currentChapter.innerHTML = "";
        storyContent.innerHTML = "";   
    });

// Bouton pour revenir au chapitre précédent
let previousChapterButton = document.getElementById("previousChapterButton");
previousChapterButton.addEventListener("click", () => {
    let previousChapter = storyService.getStoryById(_id);
    previousChapter.then((chapter) => {
        storyTitle.innerHTML = chapter.title;
        currentChapter.innerHTML = chapter.currentChapter;
        storyContent.innerHTML = chapter.content;
    });
});

// Bouton pour modifier l'histoire
let editStoryButton = document.getElementById("modifStoryButton");
editStoryButton.addEventListener("click", () => {
window.location.href = "../../../pages/updateStory.html#" + _id;
});

// Bouton pour supprimer l'histoire
let deleteStoryButton = document.getElementById("deleteStoryButton");
deleteStoryButton.addEventListener("click", () => {
    storyService.deleteStory(_id);
    window.location.href = "index.html";
});