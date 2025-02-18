
let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    currentIndex += direction;

    // Sørger for, at karusellen "ruller" korrekt ved at bruge modulus
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

