// Afficher/Masquer un élément
function toggleImage() {
    var image = document.getElementById("element");
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

// Changer l'icone de favoris
function toggleIcon() {
    var image = document.getElementById("myImage");
    if (isImage1Visible) {
        image.src = "client/assets/img/vector_ek1.png";
    } else {
        image.src = "image1.jpg";
    }
    isImage1Visible = !isImage1Visible;
}


// Changer la couleur du texte
function toggleColor() {
    var text = document.getElementById("textElement");
    if (text.style.color === "red") {
        text.style.color = "black";
    } else {
        text.style.color = "red";
    }
}

// Change l'icone de favoris
function toggleHeartIcon() {
    var heartOne = document.getElementById("heart1");
    var heartTwo = document.getElementById("heart2");

    if (heartOne.classList.contains("hidden")) {
        heartOne.classList.remove("hidden");
        heartTwo.classList.add("hidden");
    } else {
        heartOne.classList.add("hidden");
        heartTwo.classList.remove("hidden");
    }
}


export default { toggleImage, toggleIcon, toggleColor, toggleHeartIcon };