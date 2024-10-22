document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });


    function fadeOutScrollIndicator() {
        const scrollPosition = window.scrollY;
        const opacity = 1 - (scrollPosition / 300);
        scrollIndicator.style.opacity = opacity > 0 ? opacity : 0;
    }


    window.addEventListener('scroll', fadeOutScrollIndicator);

    fadeOutScrollIndicator();
});

console.log('DataFuture Blog - JS cargado');