document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        header.classList.toggle('nav-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            hamburger.classList.remove('active');
            header.classList.remove('nav-open');
        }
    });

    // Close menu when clicking nav links
    nav.addEventListener('click', () => {
        hamburger.classList.remove('active');
        header.classList.remove('nav-open');
    });
});