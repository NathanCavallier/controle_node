
const hommeButton = document.getElementById("home-button");
const corbeilleButton = document.getElementById("corbeille-button");


// Redirige l'utilisateur vers la page d'accueil
hommeButton.addEventListener("click", function () {
    window.location.href = "../../home.html";
});

// Redirige l'utilisateur vers la Corbeille
corbeilleButton.addEventListener("click", function () {
    window.location.href = "../../pages/corbeille.html";
});
