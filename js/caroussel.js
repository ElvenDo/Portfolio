// Sélectionnez les éléments nécessaires
const caroussel = document.querySelector('.carrouselItems');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Variables pour suivre la position actuelle du carrousel
let currentPosition = 0;
const itemWidth = 190; // Largeur d'un élément du carrousel

// Fonction pour déplacer le carrousel vers la gauche
function moveToPrevious() {
  currentPosition += itemWidth;
  if (currentPosition > 0) {
    currentPosition = -(itemWidth * (caroussel.children.length - 1));
  }
  caroussel.style.transform = `translateX(${currentPosition}px)`;
}

// Fonction pour déplacer le carrousel vers la droite
function moveToNext() {
  currentPosition -= itemWidth;
  if (currentPosition < -(itemWidth * (caroussel.children.length - 1))) {
    currentPosition = 0;
  }
  caroussel.style.transform = `translateX(${currentPosition}px)`;
}

// Ajoutez des écouteurs d'événements pour les boutons précédent et suivant
prevButton.addEventListener('click', moveToPrevious);
nextButton.addEventListener('click', moveToNext);


// Sélectionnez l'élément de conteneur pour les indicateurs de position
const indicatorsContainer = document.querySelector('.indicateursContainer');

// Fonction pour créer les points indicateurs
function createIndicators() {
  for (let i = 0; i < caroussel.children.length; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicateur'); // Utilisez la nouvelle classe
    if (i === 0) {
      indicator.classList.add('active');
    }
    indicatorsContainer.appendChild(indicator);
  }
}

// Appeler la fonction pour créer les indicateurs au chargement de la page
createIndicators();

// Fonction pour mettre à jour les indicateurs de position
function updateIndicators() {
  const indicators = document.querySelectorAll('.indicateur'); // Utilisez la nouvelle classe
  indicators.forEach((indicator, index) => {
    if (index * -itemWidth === currentPosition) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Appeler la fonction pour mettre à jour les indicateurs après chaque déplacement du carrousel
moveToPrevious();
moveToNext();

// Fonction pour déplacer le carrousel vers la gauche
function moveToPrevious() {
  currentPosition += itemWidth;
  if (currentPosition > 0) {
    currentPosition = -(itemWidth * (caroussel.children.length - 1));
  }
  caroussel.style.transform = `translateX(${currentPosition}px)`;
  updateIndicators(); // Ajouter cette ligne pour mettre à jour les indicateurs
}

// Fonction pour déplacer le carrousel vers la droite
function moveToNext() {
  currentPosition -= itemWidth;
  if (currentPosition < -(itemWidth * (caroussel.children.length - 1))) {
    currentPosition = 0;
  }
  caroussel.style.transform = `translateX(${currentPosition}px)`;
  updateIndicators(); // Ajouter cette ligne pour mettre à jour les indicateurs
}
