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

const slideInterval = setInterval(goToNextSlide, 1000);
let slideIndex = 0;
let interval;
function showSlide(index) { const slides = document.querySelectorAll('.slide'); if (index < 0) { slideIndex = slides.length - 1; } else if (index >= slides.length) { slideIndex = 0; } for (let i = 0; i < slides.length; i++) { slides[i].style.display = 'none'; } slides[slideIndex].style.display = 'block'; }
function changeSlide(n) { slideIndex += n; showSlide(slideIndex); }
function autoSlide() { changeSlide(1); }
showSlide(slideIndex);
interval = setInterval(autoSlide, 5000);
function isElementInViewport(element) { var rect = element.getBoundingClientRect(); return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)); }
const resizingDesign = document.getElementById('design');
const resizingDevelopment = document.getElementById('development');
const resizingProduction = document.getElementById('production');
const resizingMarking = document.getElementById('marking');
window.addEventListener('scroll', function () { if (isElementInViewport(resizingDesign)) { console.log('Div is visible!'); resizingDesign.style.width = '80%'; } }); // You can perform actions here when the div is visible } if (isElementInViewport(resizingDevelopment)) { console.log('Div is visible!'); resizingDevelopment.style.width = '40%'; // You can perform actions here when the div is visible } if (isElementInViewport(resizingMarking)) { console.log('Div is visible!'); resizingMarking.style.width = '90%'; // You can perform actions here when the div is visible } if (isElementInViewport(resizingProduction)) { console.log('Div is visible!'); resizingProduction.style.width = '25%'; // You can perform actions here when the div is visible } });
