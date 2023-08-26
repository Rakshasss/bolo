const slider = document.querySelector('.slider-container');
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
setInterval(() => {
    goToNextSlide();
}, 2000);
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
const resizingDesign = document.getElementById('design');
const resizingDevelopment = document.getElementById('development');
const resizingProduction = document.getElementById('production');
const resizingMarking = document.getElementById('marking');

window.addEventListener('scroll', function () {
    if (isElementInViewport(resizingDesign)) {
        console.log('Div is visible!');
        resizingDesign.style.width = '80%';
    }
    if (isElementInViewport(resizingDevelopment)) {
        console.log('Div is visible!');
        resizingDevelopment.style.width = '40%';
    }
    if (isElementInViewport(resizingMarking)) {
        console.log('Div is visible!');
        resizingMarking.style.width = '90%';
    }
    if (isElementInViewport(resizingProduction)) {
        console.log('Div is visible!');
        resizingProduction.style.width = '25%';
    }
}); // You can perform actions here when the div is visible } if (isElementInViewport(resizingDevelopment)) { console.log('Div is visible!'); resizingDevelopment.style.width = '40%'; // You can perform actions here when the div is visible } if (isElementInViewport(resizingMarking)) { console.log('Div is visible!'); resizingMarking.style.width = '90%'; // You can perform actions here when the div is visible } if (isElementInViewport(resizingProduction)) { console.log('Div is visible!'); resizingProduction.style.width = '25%'; // You can perform actions here when the div is visible } });

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const slideButtons = document.querySelectorAll('.slideButton');

    slideButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const slideId = button.getAttribute('data-slide-id');
            console.log(slideId);
            showSlideSecond(slideId);
        });
    });

    function showSlideSecond(slideId) {
        slides.forEach((slide) => slide.classList.remove('active'));
        const slideToShow = document.getElementById(slideId);
        slideToShow.classList.add('active');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const hoverTexts = document.querySelectorAll('.hover-text');
    const images = document.querySelectorAll('.image');

    hoverTexts.forEach((text, index) => {
        text.addEventListener('click', () => {
            setActiveText(text);
            setActiveImage(index);
        });
    });

    function setActiveText(activeText) {
        hoverTexts.forEach((text) => text.classList.remove('active'));
        activeText.classList.add('active');
    }

    function setActiveImage(activeIndex) {
        images.forEach((image) => image.classList.remove('active'));
        images[activeIndex].classList.add('active');
    }
});