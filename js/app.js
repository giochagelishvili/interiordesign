$(document).ready(function() {
    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 1500
    });

    ScrollReveal().reveal('header', { origin: 'top' });
    ScrollReveal().reveal('.portfolio-page', { origin: 'left' });
    ScrollReveal().reveal('.first-paragraph, .hero-div, .hero-description', { origin: 'bottom' });
    ScrollReveal().reveal('.sec-01-container', { origin: 'left'});
    ScrollReveal().reveal('.project-title, .project-description', { origin: 'left'});
    ScrollReveal().reveal('.project-thumbnail', { origin: 'right'});
    ScrollReveal().reveal('.information-container', { origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('.load-left', { origin: 'left' });
    ScrollReveal().reveal('.load-right', { origin: 'right' });
    ScrollReveal().reveal('.about-me, .about-paragraph', { origin: 'left'});
    ScrollReveal().reveal('.media-icon-container ul li', { origin: 'bottom', interval: 200 });
});