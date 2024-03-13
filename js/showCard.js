var realiserCard = document.querySelector(".realiserCard");
var retourButton = document.getElementById(".retour");
function toggleCard() {
    if (realiserCard.style.display === "none") {
        realiserCard.style.display = "block";
        realiserCard.classList.add("zoom-in");
        realiserCard.classList.remove("zoom-out");
    } else {
        realiserCard.classList.remove("zoom-in");
        realiserCard.classList.add("zoom-out");
        setTimeout(function (){
            realiserCard.style.display = "none";
        },500);
    }
}