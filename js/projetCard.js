const crousbab = document.querySelector('.detailsCardCrous');
const retourButton = document.getElementById("retour");
const buttonCrous = document.getElementsByClassName('projet1Card');
const pendu = document.querySelector('.detailsCardPendu')
const decision = document.querySelector('.detailsCardDecision')
const histoire = document.querySelector('.detailsCardHistoire')
function toggleCardCrousBab() {
    if (crousbab.style.display === "none") {
        crousbab.style.display = "block";
        crousbab.classList.add("zoom-in");
        crousbab.classList.remove("zoom-out");
    } else {
        crousbab.classList.remove("zoom-in");
        crousbab.classList.add("zoom-out");
        setTimeout(function () {
            crousbab.style.display = "none";
        }, 500);
    }
}
function toggleCardPendu() {
    if (pendu.style.display === "none") {
        pendu.style.display = "block";
        pendu.classList.add("zoom-in");
        pendu.classList.remove("zoom-out");
    } else {
        pendu.classList.remove("zoom-in");
        pendu.classList.add("zoom-out");
        setTimeout(function () {
            pendu.style.display = "none";
        }, 500);
    }
}
function toggleCardDecision(){
    if (decision.style.display === "none") {
        decision.style.display = "block";
        decision.classList.add("zoom-in");
        decision.classList.remove("zoom-out");
    } else {
        decision.classList.remove("zoom-in");
        decision.classList.add("zoom-out");
        setTimeout(function () {
            decision.style.display = "none";
        }, 500);
    }
}
function toggleCardHistoire(){
    if (histoire.style.display === "none") {
        histoire.style.display = "block";
        histoire.classList.add("zoom-in");
        histoire.classList.remove("zoom-out");
    } else {
        histoire.classList.remove("zoom-in");
        histoire.classList.add("zoom-out");
        setTimeout(function () {
            histoire.style.display = "none";
        }, 500);
    }
}