import { Lullaby } from '../classes/lullaby.class.js'


export class LullabyService {
  constructor() {
  }

  addLullaby(lullaby) {
  }

  getLullabyById(id) {
    // Créez un élément audio et ajoutez-le à la page
    let audioPlayer = document.createElement('audio');
    document.body.appendChild(audioPlayer);

    fetch(`https://api.soundcloud.com/playlists/${PLAYLIST_ID}?client_id=${SOUNDCLOUD_CLIENT_ID}`)
      .then(response => response.json())
      .then(data => {
        const tracks = data.tracks;
        let trackList = document.createElement('ul');

        tracks.forEach(track => {
          let listItem = document.createElement('li');
          listItem.textContent = track.title;

          // Créez un élément d'image et définissez son attribut src sur l'URL de l'image de la piste
          let img = document.createElement('img');
          img.src = track.artwork_url;

          // Ajoutez un écouteur d'événements click à l'élément de la liste
          listItem.addEventListener('click', () => {
            // Définissez la source du lecteur audio sur l'URL de la piste et commencez la lecture
            audioPlayer.src = track.stream_url + `?client_id=${SOUNDCLOUD_CLIENT_ID}`;
            audioPlayer.play();
          });

          // Ajoutez l'image à l'élément de la liste
          listItem.appendChild(img);

          trackList.appendChild(listItem);
        });

        document.body.appendChild(trackList);
      })
      .catch(error => console.error('Error:', error));
  }

  /**
   * @param {DOM} target
   * @return {Array<Lullaby>}
   */
  getLullabies(target) {

    fetch(`https://api.soundcloud.com/playlists/${PLAYLIST_ID}?client_id=${SOUNDCLOUD_CLIENT_ID}`)
      .then(response => response.json())
      .then(data => {
        const tracks = data.tracks;
        let trackList = document.createElement('ul');

        tracks.forEach(track => {
          let listItem = document.createElement('li');

          // Convertir la durée de millisecondes en minutes et secondes
          let minutes = Math.floor(track.duration / 60000);
          let seconds = ((track.duration % 60000) / 1000).toFixed(0);
          let duration = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

          listItem.textContent = track.title + ' - ' + duration + ' - ' + track.favoritings_count + ' likes';

          let lullabyImage = document.createElement('img');
          lullabyImage.src = track.artwork_url;

          listItem.addEventListener('click', () => {
            if (!audioPlayer.paused) {
              audioPlayer.pause();
            } else {
              // Définissez la source du lecteur audio sur l'URL de la piste et commencez la lecture
              audioPlayer.src = track.stream_url + `?client_id=${SOUNDCLOUD_CLIENT_ID}`;
              audioPlayer.play();
            }
          });
          listItem.appendChild(lullabyImage);
          trackList.appendChild(listItem);
        });

        document.body.appendChild(trackList);
      })
      .catch(error => console.error('Error:', error));
  }

  updateLullabyById(id, newLullaby) {

  }

  deleteLullabyById(id) {
  }
}