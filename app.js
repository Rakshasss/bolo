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
            showSlideSecond(slideId, button);
        });
    });

    function showSlideSecond(slideId, button) {
        slides.forEach((slide) => slide.classList.remove('active'));
        slideButtons.forEach((button) => button.classList.remove('active'));
        const slideToShow = document.getElementById(slideId);
        slideToShow.classList.add('active');
        button.classList.add('active');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const hoverTexts = document.querySelectorAll('.hover-text');
    const images = document.querySelectorAll('.pimage');
    const ALL = document.querySelectorAll(".yvela");
    let all_toggle = false;

    ALL.forEach((text) => {
        text.addEventListener("click", () => {
            if (all_toggle) {
                deactivateAllText();
                deactivateAllImg();
            } else {
                deactivateAllText();
                setActiveAllImg();
            }
        })
    });

    hoverTexts.forEach((text, index) => {
        text.addEventListener('click', () => {
            setActiveText(text);
            setActiveImage(index);
        });
    });

    function setActiveAllImg() {
        [...images].filter(v => v.classList.contains("active") === false).forEach((image) => image.classList.add("active"));
        all_toggle = true;
    }

    function deactivateAllImg() {
        [...images].filter(v => v.classList.contains("active") === true).forEach((image) => image.classList.remove("active"));
        all_toggle = false;
    }

    function deactivateAllText() {
        hoverTexts.forEach((text) => text.classList.remove('active'));
    }

    function setActiveText(activeText) {
        if (activeText.classList.contains("active") && !all_toggle) {
            deactivateAllText();
            activeText.classList.remove("active");
            return;
        }
        deactivateAllText();
        activeText.classList.add('active');
    }

    function setActiveImage(activeIndex) {
        if (images[activeIndex].classList.contains("active") && !all_toggle) {
            deactivateAllImg();
            images[activeIndex].classList.remove("active");
            return;
        }
        deactivateAllImg();
        images[activeIndex].classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const webInput = document.getElementById('webInput');
    const messageInput = document.getElementById('messageInput');
    const submitButton = document.getElementById('submitButton');
    const outputDiv = document.getElementById('output');

    submitButton.addEventListener('click', function () {
        const name = nameInput.value;
        const email = emailInput.value;
        const web = webInput.value;
        const message = messageInput.value;
        postData(name, email, web, message);
    });

    async function postData(name, email, web, message) {
        if ((name == null || name == "") && (email == null || email == "") && (message == null || message == "")) {
            alert("Name Email and Message must be FILLED IN");
            console.log("rame")
            return;
        }
        try {
            const dataToSend = {
                name: name,
                email: email,
                web: web,
                message: message,
            };

            const response = await fetch(
                'https://borjomi.loremipsum.ge/api/send-message', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            }
            );

            const data = await response.json();
            console.log(data);
            displayResponse(data);
        } catch (error) {
            console.error(`The Error is: ${error}`);
        }
    }

    function displayResponse(data) {
        if (data.status === 1) {
            outputDiv.innerHTML = `
          <h2>Response:</h2>
          <pre>${data.desc}</pre>
      `;
        }
    }
});