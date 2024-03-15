
// Fonction qui redirige l'utilisateur vers la page d'accueil
const hommeButton = document.getElementById("home-button");
hommeButton.addEventListener("click", function () {
    window.location.href = "../home.html";
});

// Fonction qui redirige l'utilisateur vers la Corbeille
const corbeilleButton = document.getElementById("corbeille-button");
corbeilleButton.addEventListener("click", function () {
    window.location.href = "../client/pages/corbeille.html";
});
