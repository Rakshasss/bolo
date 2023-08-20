const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;


function goToNextSlide() {
    hideCurrentSlide();
    currentSlide = (currentSlide + 1) % images.length;
    revealCurrentSlide();
}

prevButton.addEventListener('click', () => {
    goToPreviousSlide();
});

nextButton.addEventListener('click', () => {
    goToNextSlide();
});

function hideCurrentSlide() {
    images[currentSlide].classList.add('hidden-image');
}

function revealCurrentSlide() {
    images[currentSlide].classList.remove('hidden-image');
}


for (let i = 1; i < images.length; i++) {
    images[i].classList.add('hidden-image');
}


const slideInterval = setInterval(goToNextSlide, 5000);


slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(goToNextSlide, 5000);
});
