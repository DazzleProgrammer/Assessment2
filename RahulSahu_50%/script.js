const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});