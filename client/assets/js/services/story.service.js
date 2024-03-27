import { Story } from "../classes/story.class.js"


export class StoryService {
    constructor() {}

    /**
     * Récupérer toutes les histoires
     * @param {DOM} target
     * @return {Array<Story>}
     */
    getAllStories(target) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        let url = "api/stories";
        let request = new Request(url, {
            method: "GET",
            headers: headers
        });

        fetch(request)
            .then(response => response.json())
            .then(stories => {
                let newTableRow = document.createElement("tr");
                let stepper = 0;
                stories.forEach((story, index) => {
                    let cell = document.createElement("td");

                    let rectangle_5 = document.createElement("div");
                    rectangle_5.className = "rectangle-5";

                    let title = document.createElement("p");
                    title.innerText = story.title;
                    title.className = "alice-au-pays-des-merveilles";

                    let linkToStoryReaderPage = document.createElement("a");
                    linkToStoryReaderPage.href = `./pages/storyRreader.html#${story.id}`;
                    linkToStoryReaderPage.appendChild(title);

                    let image = document.createElement("img");
                    image.src = story.imageLink;
                    image.alt = story.title;
                    image.className = "cardPicture";

                    let bouton_accueil4 = document.createElement("div");
                    bouton_accueil4.className = "bouton-accueil4";

                    // Bouton pour ajouter aux favoris
                    let favoriteBtn = document.createElement("button");
                    favoriteBtn.addEventListener("click", () => {
                        let storyService = new StoryService();
                        storyService.getStoryById(story.id, !story.isFavorite)
                            .then(() => {
                                story.isFavorite = !story.isFavorite;/*
                                favoriteBtn.innerHTML = story.isFavorite ?
                                    `<div class="box-clicable" id="isFavorite">
                                            <svg class="material-symbols-favorite-outline2" width="47" height="47" viewBox="0 0 47 47"
                                                fill="white" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23.5 41.125L20.6604 38.5792C17.3639 35.609 14.6385 33.0469 12.4844 30.8927C10.3302 28.7385 8.61666 26.8043 7.34374 25.0902C6.07082 23.3773 5.18174 21.8028 4.67649 20.3667C4.17124 18.9305 3.91796 17.4618 3.91666 15.9604C3.91666 12.8924 4.94478 10.3302 7.00103 8.27395C9.05728 6.2177 11.6194 5.18958 14.6875 5.18958C16.3847 5.18958 18.0003 5.5486 19.5344 6.26666C21.0684 6.98471 22.3903 7.99652 23.5 9.30207C24.6097 7.99652 25.9316 6.98471 27.4656 6.26666C28.9996 5.5486 30.6153 5.18958 32.3125 5.18958C35.3805 5.18958 37.9427 6.2177 39.9989 8.27395C42.0552 10.3302 43.0833 12.8924 43.0833 15.9604C43.0833 17.4618 42.8307 18.9305 42.3254 20.3667C41.8202 21.8028 40.9305 23.3773 39.6562 25.0902C38.3833 26.8043 36.6698 28.7385 34.5156 30.8927C32.3614 33.0469 29.6361 35.609 26.3396 38.5792L23.5 41.125ZM23.5 35.8375C26.6333 33.0305 29.2118 30.6237 31.2354 28.6171C33.259 26.6105 34.8583 24.8643 36.0333 23.3786C37.2083 21.8928 38.0243 20.5703 38.4812 19.411C38.9382 18.2517 39.1667 17.1015 39.1667 15.9604C39.1667 14.0021 38.5139 12.3701 37.2083 11.0646C35.9028 9.75902 34.2708 9.10624 32.3125 9.10624C30.7785 9.10624 29.3587 9.53838 28.0531 10.4027C26.7476 11.2669 25.85 12.3688 25.3604 13.7083H21.6396C21.15 12.3701 20.2524 11.2689 18.9469 10.4046C17.6413 9.54034 16.2215 9.10755 14.6875 9.10624C12.7292 9.10624 11.0972 9.75902 9.79166 11.0646C8.4861 12.3701 7.83332 14.0021 7.83332 15.9604C7.83332 17.1028 8.0618 18.2536 8.51874 19.4129C8.97568 20.5723 9.79166 21.8942 10.9667 23.3786C12.1417 24.863 13.741 26.6092 15.7646 28.6171C17.7882 30.6251 20.3667 33.0318 23.5 35.8375Z"
                                                    fill="none" />
                                            </svg>
                                            </div>` :
                                    `<div class="box-clicable" id="isFavorite">
                                            <svg class="material-symbols-favorite-outline2" width="47" height="47" viewBox="0 0 47 47"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23.5 41.125L20.6604 38.5792C17.3639 35.609 14.6385 33.0469 12.4844 30.8927C10.3302 28.7385 8.61666 26.8043 7.34374 25.0902C6.07082 23.3773 5.18174 21.8028 4.67649 20.3667C4.17124 18.9305 3.91796 17.4618 3.91666 15.9604C3.91666 12.8924 4.94478 10.3302 7.00103 8.27395C9.05728 6.2177 11.6194 5.18958 14.6875 5.18958C16.3847 5.18958 18.0003 5.5486 19.5344 6.26666C21.0684 6.98471 22.3903 7.99652 23.5 9.30207C24.6097 7.99652 25.9316 6.98471 27.4656 6.26666C28.9996 5.5486 30.6153 5.18958 32.3125 5.18958C35.3805 5.18958 37.9427 6.2177 39.9989 8.27395C42.0552 10.3302 43.0833 12.8924 43.0833 15.9604C43.0833 17.4618 42.8307 18.9305 42.3254 20.3667C41.8202 21.8028 40.9305 23.3773 39.6562 25.0902C38.3833 26.8043 36.6698 28.7385 34.5156 30.8927C32.3614 33.0469 29.6361 35.609 26.3396 38.5792L23.5 41.125ZM23.5 35.8375C26.6333 33.0305 29.2118 30.6237 31.2354 28.6171C33.259 26.6105 34.8583 24.8643 36.0333 23.3786C37.2083 21.8928 38.0243 20.5703 38.4812 19.411C38.9382 18.2517 39.1667 17.1015 39.1667 15.9604C39.1667 14.0021 38.5139 12.3701 37.2083 11.0646C35.9028 9.75902 34.2708 9.10624 32.3125 9.10624C30.7785 9.10624 29.3587 9.53838 28.0531 10.4027C26.7476 11.2669 25.85 12.3688 25.3604 13.7083H21.6396C21.15 12.3701 20.2524 11.2689 18.9469 10.4046C17.6413 9.54034 16.2215 9.10755 14.6875 9.10624C12.7292 9.10624 11.0972 9.75902 9.79166 11.0646C8.4861 12.3701 7.83332 14.0021 7.83332 15.9604C7.83332 17.1028 8.0618 18.2536 8.51874 19.4129C8.97568 20.5723 9.79166 21.8942 10.9667 23.3786C12.1417 24.863 13.741 26.6092 15.7646 28.6171C17.7882 30.6251 20.3667 33.0318 23.5 35.8375Z"
                                                    fill="white" />
                                            </svg>
                                        </div>`;*/
                            });
                    });

                    // Bouton pour supprimer une histoire
                    let deleteBtn = document.createElement("button");
                    deleteBtn.addEventListener("click", () => {
                        let storyService = new StoryService();
                        storyService.deleteStory(story.id);
                        newTableRow.removeChild(cell);
                    });
                    /*
                    deleteBtn.innerHTML = `
                            <svg class="icomoon-free-bin" width="46" height="41" viewBox="0 0 46 41" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_131_2)">
                                    <path
                                        d="M5.68207 12.8125V38.4375C5.68207 39.8469 6.96053 41 8.5231 41H34.0924C35.655 41 36.9334 39.8469 36.9334 38.4375V12.8125H5.68207ZM14.2052 35.875H11.3641V17.9375H14.2052V35.875ZM19.8872 35.875H17.0462V17.9375H19.8872V35.875ZM25.5693 35.875H22.7283V17.9375H25.5693V35.875ZM31.2514 35.875H28.4103V17.9375H31.2514V35.875ZM37.6437 5.125H28.4103V1.92188C28.4081 1.41279 28.1829 0.925124 27.7838 0.565141C27.3846 0.205157 26.844 0.00202424 26.2796 0L16.3359 0C15.7715 0.00202424 15.2308 0.205157 14.8317 0.565141C14.4326 0.925124 14.2074 1.41279 14.2052 1.92188V5.125H4.97181C4.40715 5.12635 3.86605 5.32927 3.46678 5.6894C3.06751 6.04953 2.84253 6.53758 2.84103 7.04688V10.25H39.7745V7.04688C39.773 6.53758 39.548 6.04953 39.1487 5.6894C38.7494 5.32927 38.2083 5.12635 37.6437 5.125ZM25.5693 5.125H17.0462V2.59581H25.5693V5.125Z"
                                        fill="red" opacity="0.40" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_131_2">
                                        <rect width="45.4565" height="41" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>`; */

                    let group_kebab = document.createElement("div");
                    group_kebab.className = "group-kebab";
                    group_kebab.appendChild(deleteBtn);


                    cell.appendChild(rectangle_5);
                    cell.appendChild(image);
                    cell.appendChild(bouton_accueil4);
                    cell.appendChild(linkToStoryReaderPage);
                    cell.appendChild(title);
                    cell.appendChild(favoriteBtn);
                    cell.appendChild(deleteBtn);
                    cell.appendChild(group_kebab);
                    newTableRow.appendChild(cell);

                    stepper++;

                    if (stepper === 5 || index === (stories.length - 1)) {
                        target.appendChild(newTableRow);
                        newTableRow = document.createElement("tr");
                        stepper = 0;
                    }
                });

                // Bouton (+) pour ajouter une nouvelle histoire, se déplace toujours à la dernière place de la grille
                let movingButton = document.createElement("div");/*
                movingButton.innerHTML = `
                        <div onclick='window.location.href="./pages/newStory.html"' class="box-clicable"
                            onmouseenter='toogleAddNewStoryButton()' onmouseleave='toogleAddNewStoryButton()'>
                            <svg class="group-48" width="255" height="207" viewBox="0 0 255 207" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="253" height="205" rx="30" stroke="grey" stroke-opacity="0.25"
                                    stroke-width="2" />
                                <rect x="1" y="1" width="253" height="205" rx="30" stroke="white" stroke-opacity="0.25"
                                    stroke-width="2" id="showMe" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M126.984 36.2693C117.912 36.2693 110.558 43.6236 110.558 52.6957V80.6966H83.7235C74.4751 80.6966 66.9778 88.1939 66.9778 97.4423C66.9778 106.691 74.4751 114.188 83.7235 114.188H110.558V142.189C110.558 151.261 117.912 158.615 126.984 158.615C136.056 158.615 143.411 151.261 143.411 142.189V114.188H170.245C179.494 114.188 186.991 106.691 186.991 97.4423C186.991 88.1939 179.494 80.6966 170.245 80.6966H143.411V52.6957C143.411 43.6236 136.056 36.2693 126.984 36.2693Z"
                                    fill="#ffffff" fill-opacity="0.66" />
                            </svg>
                        </div>`;*/

                // Bouton à la dernière cellule
                newTableRow.lastChild.appendChild(movingButton);

                return stories;
            })
            .catch(error => console.log(error));

    }

    /**
     * Récupérer toutes les histoires favorites
     * @param {DOM} target
     * @return {Array<Story>}
     */
    getAllFavoriteStories(target) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let url = "api/stories";
        let request = new Request(url, {
            method: "GET",
            headers: headers
        });
        let stories = [];

        fetch(request)
            .then(response => response.json())
            .then((data) => {
                data.forEach((story) => {
                    if (story.isFavorite) {
                        stories.push(story);
                    }
                });
                this.displayStories(stories, target);
            })
            .catch(error => console.log(error));
    }


    /**
     * Récupérer les histoires déjà lues (Historique)
     * @param {DOM} target
     * @return {Array<Story>}
     * 
     */
     getAllReadStories(target) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let url = "api/stories";
        let request = new Request(url, {
            method: "GET",
            headers: headers
        });
        let stories = [];

        fetch(request)
            .then(response => response.json())
            .then((data) => {
                data.forEach((story) => {
                    if (story.isHistorique) {
                        stories.push(story);
                    }
                });
                this.displayStories(stories, target);
            })
            .catch(error => console.log(error));
     }

     /**
     * Récupérer les histoires mise à la corbeille
     * @param {DOM} target
     * @return {Array<Story>}
     */
     getAllTrashStories(target) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let url = "api/stories";
        let request = new Request(url, {
            method: "GET",
            headers: headers
        });
        let stories = [];

        fetch(request)
            .then(response => response.json())
            .then((data) => {
                data.forEach((story) => {
                    if (story.isArchive) {
                        stories.push(story);
                    }
                });
                this.displayStories(stories, target);
            })
            .catch(error => console.log(error));
     }
     
     

    /**
     * Récupérer une histoire par son titre (title)
     * @param {String} id
     * @return {Story}
     */
    getStoryById(id) {
        let headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        let url = `api/stories/${id}`;
        let request = new Request(url, {
            method: "GET",
            headers: headers
        });

        fetch(request)
            .then(response => response.json())
            .then((story) => {
                let requestedStory = new Story(
                    story.id,
                    story.title,
                    story.author,
                    story.numberOfChapters,
                    story.currentChapter,
                    story.storyDescription,
                    story.storyGenre,
                    story.releaseYear,
                    story.imageLink,
                    story.storyTags,
                    story.listOfChapters,
                    story.listOfChapters,
                    story.linkToStoryReaderPage,
                    story.listOfChapter,

                    story.isFavorite,
                    story.isBookmark,
                    story.isHitorique,
                    story.isArchive,
                    story.isStarred,
                    story.isFinished
                );
                return requestedStory;
            })
            .catch(error => console.log(error));
    }

    /**
     * Créer une nouvelle histoire
     * @param {Story} story
     */
    createStory(story) {
        let headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        let url = "api/stories";
        let request = new Request(url, {
            method: "POST",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(story)
        });

        fetch(request)
            .then(response => response.json())
            .then(story => console.log(story))
            .catch(error => console.log(error));
    }

    /**
     * Mettre à jour une histoire
     * @param {Story} story
     */
    updateStory(story) {
        let headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        let url = `api/stories/${story.id}`;
        let request = new Request(url, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(story)
        });

        fetch(request)
            .then(response => response.json())
            .then(story => console.log(story))
            .catch(error => console.log(error));
    }

    /**
     * Supprimer une histoire
     * @param {String} id
     */
    deleteStory(id) {
        let headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        let url = `api/stories/${id}`;
        let request = new Request(url, {
            method: "DELETE",
            headers: headers
        });

        fetch(request)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
}