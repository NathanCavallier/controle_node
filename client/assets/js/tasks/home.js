const isFavoriteButton = document.querySelector('is-favorite-button');
const isLittleMenu = document.querySelector('is-little-menu');
//const HideWhiteButton = document.querySelector('hideMe');
const hideMe = document.getElementById('#hideMe');


hideMe.addEventListener('mouseenter', function() {
    hideMe.style.display = 'none';
});

hideMe.addEventListener('mouseleave', function() {
    hideMe.style.display = 'block';
});

isLittleMenu.addEventListener('mouseenter', function() {
    isLittleMenu.style.display = 'block';
});

isLittleMenu.addEventListener('mouseleave', function() {
    isLittleMenu.style.display = 'none';
});

isFavoriteButton.addEventListener('click', function() {
  
});