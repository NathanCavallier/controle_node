import { StoryService } from "../services/story.service";
import { Story } from "../classes/story.class";


let title = document.querySelector("#title");
let releaseYear = document.querySelector("#releaseYear");
let author = document.querySelector("#author");
let storyGenre = document.querySelector("#storyGenre");
let storyDescription = document.querySelector("#storyDescription");
let numberOfChapters = getNumberOfChapters();
let chapters = [];

for (var i = 1; i <= story.numberOfChapters; i++) {
    let chapter = {
        "title": document.querySelector("#title").value,
        "content": document.querySelector("#storyContent" + i).value
    };
    chapters.push(chapter);
}

let myId = window.location.hash.substring(1);

let story = new Story(myId, title.value, releaseYear.value, author.value, storyGenre.value, storyDescription.value, numberOfChapters, chapters);
let storyService = new StoryService();
storyService.updateStory(story);
alert("Story updated successfully!");
window.location.href = "home.html";