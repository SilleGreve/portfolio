"use strict"

let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector(".carousel");
    const totalSlides = document.querySelectorAll(".carousel-item").length;
    
    currentIndex += direction;

    // Sørg for, at vi ikke går uden for rækkevidde
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Flytter slideren
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}