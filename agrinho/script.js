let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 15000); // Alterne slides a cada 3 segundos
showSlides(currentSlide);

function showSlides(index) {
    const slides = document.getElementsByClassName('carousel-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}

function nextSlide() {
    const slides = document.getElementsByClassName('carousel-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlides(currentSlide);
}

function prevSlide() {
    const slides = document.getElementsByClassName('carousel-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlides(currentSlide);
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    }
}
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    }
}
