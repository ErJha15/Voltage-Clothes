document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-clothes', {delay: 500 });
ScrollReveal().reveal('.clothes-banner-one', {delay: 500 });
ScrollReveal().reveal('.clothes-banner-two', {delay: 500 });