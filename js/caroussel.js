document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
    });

    splide.mount();

    // Sélectionnez les boutons précédents et suivants
    var prevButton = document.querySelector('.precedent');
    var nextButton = document.querySelector('.next');

    // Écoutez les clics sur les boutons et défilez en conséquence
    prevButton.addEventListener('click', function () {
        splide.go('prev');
    });

    nextButton.addEventListener('click', function () {
        splide.go('next');
    });
});