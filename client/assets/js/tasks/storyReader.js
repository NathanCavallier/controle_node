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
});

// Bouton pour revenir au chapitre précédent
let previousChapterButton = document.getElementById("previousChapterButton");
previousChapterButton.addEventListener("click", () => {
    let previousChapter = storyService.getStoryById(_id);
    previousChapter.then((chapter) => {
        storyTitle.innerHTML = chapter.title;
        currentChapter.innerHTML = chapter.currentChapter;
        storyContent.innerHTML = chapter.content;
        storyImage.src = chapter.image;
        storyImage.alt = chapter.title;
        storyImage.title = chapter.title;
        storyImage.style.display = "block";
    });
});

// Bouton pour mettre l'histoire en favoris / ne plus la mettre en favoris
let favoriteButton = document.getElementById("favoriteButton");
favoriteButton.addEventListener("click", () => {
    storyService.toggleFavorite(_id);
    if (story.isFavorite) {
        favoriteButton.innerHTML = `
                        <div class="box-clicable" id="isFavorite">
                            <svg class="material-symbols-favorite-outline" width="63" height="61" viewBox="0 0 63 61"
                                fill="#B071FF" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.5 41.125L20.6604 38.5792C17.3639 35.609 14.6385 33.0469 12.4844 30.8927C10.3302 28.7385 8.61666 26.8043 7.34374 25.0902C6.07082 23.3773 5.18174 21.8028 4.67649 20.3667C4.17124 18.9305 3.91796 17.4618 3.91666 15.9604C3.91666 12.8924 4.94478 10.3302 7.00103 8.27395C9.05728 6.2177 11.6194 5.18958 14.6875 5.18958C16.3847 5.18958 18.0003 5.5486 19.5344 6.26666C21.0684 6.98471 22.3903 7.99652 23.5 9.30207C24.6097 7.99652 25.9316 6.98471 27.4656 6.26666C28.9996 5.5486 30.6153 5.18958 32.3125 5.18958C35.3805 5.18958 37.9427 6.2177 39.9989 8.27395C42.0552 10.3302 43.0833 12.8924 43.0833 15.9604C43.0833 17.4618 42.8307 18.9305 42.3254 20.3667C41.8202 21.8028 40.9305 23.3773 39.6562 25.0902C38.3833 26.8043 36.6698 28.7385 34.5156 30.8927C32.3614 33.0469 29.6361 35.609 26.3396 38.5792L23.5 41.125ZM23.5 35.8375C26.6333 33.0305 29.2118 30.6237 31.2354 28.6171C33.259 26.6105 34.8583 24.8643 36.0333 23.3786C37.2083 21.8928 38.0243 20.5703 38.4812 19.411C38.9382 18.2517 39.1667 17.1015 39.1667 15.9604C39.1667 14.0021 38.5139 12.3701 37.2083 11.0646C35.9028 9.75902 34.2708 9.10624 32.3125 9.10624C30.7785 9.10624 29.3587 9.53838 28.0531 10.4027C26.7476 11.2669 25.85 12.3688 25.3604 13.7083H21.6396C21.15 12.3701 20.2524 11.2689 18.9469 10.4046C17.6413 9.54034 16.2215 9.10755 14.6875 9.10624C12.7292 9.10624 11.0972 9.75902 9.79166 11.0646C8.4861 12.3701 7.83332 14.0021 7.83332 15.9604C7.83332 17.1028 8.0618 18.2536 8.51874 19.4129C8.97568 20.5723 9.79166 21.8942 10.9667 23.3786C12.1417 24.863 13.741 26.6092 15.7646 28.6171C17.7882 30.6251 20.3667 33.0318 23.5 35.8375Z"
                                    fill="none" />
                            </svg>
                        </div>`;
    } else {
        favoriteButton.innerHTML = `
                        <div class="box-clicable" id="isFavorite">
                        <svg class="material-symbols-favorite-outline" width="63" height="61" viewBox="0 0 63 61"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.5 41.125L20.6604 38.5792C17.3639 35.609 14.6385 33.0469 12.4844 30.8927C10.3302 28.7385 8.61666 26.8043 7.34374 25.0902C6.07082 23.3773 5.18174 21.8028 4.67649 20.3667C4.17124 18.9305 3.91796 17.4618 3.91666 15.9604C3.91666 12.8924 4.94478 10.3302 7.00103 8.27395C9.05728 6.2177 11.6194 5.18958 14.6875 5.18958C16.3847 5.18958 18.0003 5.5486 19.5344 6.26666C21.0684 6.98471 22.3903 7.99652 23.5 9.30207C24.6097 7.99652 25.9316 6.98471 27.4656 6.26666C28.9996 5.5486 30.6153 5.18958 32.3125 5.18958C35.3805 5.18958 37.9427 6.2177 39.9989 8.27395C42.0552 10.3302 43.0833 12.8924 43.0833 15.9604C43.0833 17.4618 42.8307 18.9305 42.3254 20.3667C41.8202 21.8028 40.9305 23.3773 39.6562 25.0902C38.3833 26.8043 36.6698 28.7385 34.5156 30.8927C32.3614 33.0469 29.6361 35.609 26.3396 38.5792L23.5 41.125ZM23.5 35.8375C26.6333 33.0305 29.2118 30.6237 31.2354 28.6171C33.259 26.6105 34.8583 24.8643 36.0333 23.3786C37.2083 21.8928 38.0243 20.5703 38.4812 19.411C38.9382 18.2517 39.1667 17.1015 39.1667 15.9604C39.1667 14.0021 38.5139 12.3701 37.2083 11.0646C35.9028 9.75902 34.2708 9.10624 32.3125 9.10624C30.7785 9.10624 29.3587 9.53838 28.0531 10.4027C26.7476 11.2669 25.85 12.3688 25.3604 13.7083H21.6396C21.15 12.3701 20.2524 11.2689 18.9469 10.4046C17.6413 9.54034 16.2215 9.10755 14.6875 9.10624C12.7292 9.10624 11.0972 9.75902 9.79166 11.0646C8.4861 12.3701 7.83332 14.0021 7.83332 15.9604C7.83332 17.1028 8.0618 18.2536 8.51874 19.4129C8.97568 20.5723 9.79166 21.8942 10.9667 23.3786C12.1417 24.863 13.741 26.6092 15.7646 28.6171C17.7882 30.6251 20.3667 33.0318 23.5 35.8375Z"
                                    fill="none" />
                            </svg>
                        </div>`;
    }
});

