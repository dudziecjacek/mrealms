let slideIndex = 1;
let timeInterval;
addDotsToCarousel();

function addDotsToCarousel() {
    const container = document.querySelector('.dot__container');
    const slidesNr = document.querySelectorAll('.slideshow__item').length;
    for (let i = 1; i <= slidesNr; i++) {
        container.innerHTML += `
        <span class="dot" data-number="${i}"></span>
        `
    }
}

// Next/previous controls
function plusSlidesButton(n) {
    clearInterval(timeInterval);
    timeInterval = setInterval(() => {
        plusSlides(1)
    }, 3000)
    plusSlides(n);
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(e) {
    slideIndex = Number(e.target.dataset.number);
    showSlides(slideIndex);

    clearInterval(timeInterval);
    timeInterval = setInterval(() => {
        plusSlides(1)
    }, 3000)


}

function showSlides(n) {
    const slides = document.getElementsByClassName("slideshow__item");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function runSlideshow() {
    timeInterval = setInterval(() => {
        plusSlides(1)
    }, 3000)
}

document.querySelectorAll('.dot').forEach(el => el.addEventListener('click', currentSlide))
document.querySelector('.slideshow__btn-next').addEventListener('click', () => {
    plusSlidesButton(1)
});
document.querySelector('.slideshow__btn-prev').addEventListener('click', () => {
    plusSlidesButton(-1)
});


showSlides(slideIndex);
runSlideshow();