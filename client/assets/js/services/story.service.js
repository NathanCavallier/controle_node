import { Story } from "../classes/story.class.js"


export class StoryService {
    constructor() {
    }

    /**
     * Récupérer toutes les histoires
     * @param {DOM} target
     * @return {Array<Story>}
     */
    getAllStories(target) {
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
                    let newTabbleRow = document.createElement("tr");
                    for (let index = 0; index < 5; index++) {
                        let newCell = document.createElement("td");
                        newCell
                        newCell.innerHTML = story[index];
                        newTabbleRow.appendChild(newCell);
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
    updateStory(story) {
    }

    /**
     * Supprimer une histoire
     * @param {Number} id
     */
    deleteStory(id) {
    }
}