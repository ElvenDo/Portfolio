const caroussel = document.querySelector('.carrouselItems');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentPosition = 0;
const itemWidth = 190;

function moveToPrevious() {
  currentPosition += itemWidth;
  if (currentPosition > 0) {
    currentPosition = -(itemWidth * (caroussel.children.length - 1));
  }
  caroussel.style.transform = `translateX(${currentPosition}px)`;
}

function moveToNext() {
  currentPosition -= itemWidth;
  if (currentPosition < -(itemWidth * (caroussel.children.length - 1))) {
    currentPosition = 0;
  }
  caroussel.style.transform = `translateX(${currentPosition}px)`;
}

prevButton.addEventListener('click', moveToPrevious);
nextButton.addEventListener('click', moveToNext);


const indicatorsContainer = document.querySelector('.indicateursContainer');

function createIndicators() {
  for (let i = 0; i < caroussel.children.length; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicateur');
    if (i === 0) {
      indicator.classList.add('active');
    }
    indicatorsContainer.appendChild(indicator);
  }
}
createIndicators();

function updateIndicators() {
  const indicators = document.querySelectorAll('.indicateur');
  indicators.forEach((indicator, index) => {
    if (index * -itemWidth === currentPosition) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

moveToPrevious();
moveToNext();

function moveToPrevious() {
  currentPosition += itemWidth;
  if (currentPosition > 0) {
    currentPosition = -(itemWidth * (caroussel.children.length - 1));
  }
  caroussel.style.transform = `translateX(${currentPosition}px)`;
  updateIndicators();
}

function moveToNext() {
  currentPosition -= itemWidth;
  if (currentPosition < -(itemWidth * (caroussel.children.length - 1))) {
    currentPosition = 0;
  }
  caroussel.style.transform = `translateX(${currentPosition}px)`;
  updateIndicators();
}
