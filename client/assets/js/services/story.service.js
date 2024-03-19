import { Story } from "../classes/story.class.js"


export class StoryService {
    constructor() { }

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
                            let image = document.createElement("img");
                            let imageLink = document.createElement("a");
                            let title = document.createElement("p");
                            let isFavorite = document.createElement("p");
                            let favoriteBtn = document.createElement("button");
                            let deleteBtn = document.createElement("button");
                            image.src = story.imageLink;
                            imageLink.href = story.imageLink;
                            title.innerHTML = story.title;
                            isFavorite.innerHTML = story.isFavorite;
                            favoriteBtn.innerHTML = "Favoris";
                            deleteBtn.innerHTML = "Supprimer";

                            cell.appendChild(image);
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
            let requestedStory = new Story(story.id, story.title, story.imageLink, story.isFavorite);
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