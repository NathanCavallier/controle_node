import { Story } from "../classes/story.class.js"


export class StoryService {
    constructor() {}

    /**
     * Récupérer toutes les histoires
     * @param {DOM} target
     * @return {Array<Story>}
     */
    getAllStories(target) {
        let num = 1;
        var stepper = 1;
        let table = document.createElement("table");
        target.appendChild(table);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let url = "api/stories";
        let request = new Request(url, {
            method: "GET",
            headers: headers
        });

        fetch(request)
            .then(response => response.json())
            .then(stories => {
                stories.forEach(story => {
                    let cell = document.createElement("td");

                    if (stories.length <= 5) {
                        let newTabbleRow = document.createElement("tr");

                        let imageLink = document.createElement("a");
                        let title = document.createElement("p");
                        let isFavorite = document.createElement("p");
                        let favoriteBtn = document.createElement("button");
                        let deleteBtn = document.createElement("button");
                        imageLink.href = story.imageLink;
                        title.innerHTML = story.title;
                        isFavorite.innerHTML = story.isFavorite;
                        favoriteBtn.innerHTML = "Favoris";
                        deleteBtn.innerHTML = "Supprimer";

                        cell.appendChild(imageLink);
                        cell.appendChild(title);
                        cell.appendChild(favoriteBtn);
                        cell.appendChild(deleteBtn);
                        newTabbleRow.appendChild(cell);

                        stepper = 1;
                        target.appendChild(newTabbleRow);
                    } else {
                        if (stepper < 6) {
                            let imageLink = document.createElement("a");
                            let title = document.createElement("p");
                            let isFavorite = document.createElement("p");
                            let favoriteBtn = document.createElement("button");
                            let deleteBtn = document.createElement("button");
                            imageLink.href = story.imageLink;
                            title.innerHTML = story.title;
                            isFavorite.innerHTML = story.isFavorite;
                            favoriteBtn.innerHTML = "Favoris";
                            deleteBtn.innerHTML = "Supprimer";

                            cell.appendChild(imageLink);
                            cell.appendChild(title);
                            cell.appendChild(favoriteBtn);
                            cell.appendChild(deleteBtn);
                            newTabbleRow.appendChild(cell);
                        } else {
                            stepper = 1;
                            target.appendChild(newTabbleRow);
                        }
                        stepper = stepper + 1;
                    }
                });
            })
            .catch(error => console.log(error));
    }

    /**
     * Récupérer une histoire par son titre (title)
     * @param {Number} id
     * @return {Story}
     */
    getStoryById(id) {

    }

    /**
     * Créer une nouvelle histoire
     * @param {Story} story
     * @return {Story}
     */
    createStory(story) {

    }

    /**
     * Mettre à jour une histoire
     * @param {Story} story
     * @return {Story}
     */
    updateStory(story) {}

    /**
     * Supprimer une histoire
     * @param {Number} id
     */
    deleteStory(id) {}
}