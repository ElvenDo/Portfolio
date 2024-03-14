var realiserCard = document.querySelector(".realiserCard");
var retourButton = document.getElementById("retour");
var optimiserCard = document.querySelector(".optimiserCard");
var administrerCard = document.querySelector(".administrerCard");
var gererCard = document.querySelector(".gererCard");
var conduireCard = document.querySelector(".conduireCard");
var collaborerCard = document.querySelector(".collaborerCard");
function toggleCardRealiser() {
    if (realiserCard.style.display === "none") {
        realiserCard.style.display = "block";
        realiserCard.classList.add("zoom-in");
        realiserCard.classList.remove("zoom-out");
    } else {
        realiserCard.classList.remove("zoom-in");
        realiserCard.classList.add("zoom-out");
        setTimeout(function () {
            realiserCard.style.display = "none";
        }, 500);
    }
}
function toggleCardOptimiser() {
    if (optimiserCard.style.display === "none") {
        optimiserCard.style.display = "block";
        optimiserCard.classList.add("zoom-in");
        optimiserCard.classList.remove("zoom-out");
    } else {
        optimiserCard.classList.remove("zoom-in");
        optimiserCard.classList.add("zoom-out");
        setTimeout(function () {
            optimiserCard.style.display = "none";
        }, 500);
    }
}
function toggleCardAdministrer() {
    if (administrerCard.style.display === "none") {
        administrerCard.style.display = "block";
        administrerCard.classList.add("zoom-in");
        administrerCard.classList.remove("zoom-out");
    } else {
        administrerCard.classList.remove("zoom-in");
        administrerCard.classList.add("zoom-out");
        setTimeout(function () {
            administrerCard.style.display = "none";
        }, 500);
    }
}
function toggleCardGerer() {
    if (gererCard.style.display === "none") {
        gererCard.style.display = "block";
        gererCard.classList.add("zoom-in");
        gererCard.classList.remove("zoom-out");
    } else {
        gererCard.classList.remove("zoom-in");
        gererCard.classList.add("zoom-out");
        setTimeout(function () {
            gererCard.style.display = "none";
        }, 500);
    }
}
function toggleCardConduire() {
    if (conduireCard.style.display === "none") {
        conduireCard.style.display = "block";
        conduireCard.classList.add("zoom-in");
        conduireCard.classList.remove("zoom-out");
    } else {
        conduireCard.classList.remove("zoom-in");
        conduireCard.classList.add("zoom-out");
        setTimeout(function () {
            conduireCard.style.display = "none";
        }, 500);
    }
}
function toggleCardCollaborer() {
    if (collaborerCard.style.display === "none") {
        collaborerCard.style.display = "block";
        collaborerCard.classList.add("zoom-in");
        collaborerCard.classList.remove("zoom-out");
    } else {
        collaborerCard.classList.remove("zoom-in");
        collaborerCard.classList.add("zoom-out");
        setTimeout(function () {
            collaborerCard.style.display = "none";
        }, 500);
    }
}
