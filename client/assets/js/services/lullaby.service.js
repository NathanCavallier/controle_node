import { Lullaby } from '../classes/lullaby.class.js'


export class LullabyService {
  constructor() {
    this.lullabies = [];
  }

  addLullaby(lullaby) {
    this.lullabies.push(lullaby);
  }

  getLullabyById(id) {
    let url = `hhttps://api.soundcloud.com/tracks/${id}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'OAuth oauth_consumer_key="P6O67Yliyfmd11yWk9jaYmOVKmh9LDEt"');
    return fetch(url, {
      method: 'GET',
      headers: headers
    })
    .then((elt) => {
        if(elt.ok){
            return elt.json();
        }
    })
    .then((response) => {
        let lullaby = new Lullaby(response.id, response.title, response.uri, response.artwork_url, response.user.username, response.duration);
        return lullaby;
    })
    .catch((err) => {
        console.log(err);
    });
  }

  getLullabies() {
    return this.lullabies;
  }

  updateLullabyById(id, newLullaby) {
    
  }

  removeLullabyById(id) {
    this.lullabies = this.lullabies.filter(lullaby => lullaby.getId() !== id);
  }
}