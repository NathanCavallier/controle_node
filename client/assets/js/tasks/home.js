const isFavoriteButton = document.querySelector('is-favorite-button');
const isLittleMenu = document.querySelector('is-little-menu');

const histoires = document.querySelector('#histoires');
const berceuses = document.querySelector('#berceuses');
const favoris = document.querySelector('#favoris');
const historique = document.querySelector('#historique');

const accueil = document.querySelector('#home');
const corbeille = document.querySelector('#corbeille');


histoires.addEventListener('click', () => {
    window.location.href = '../../../home.html';
});

