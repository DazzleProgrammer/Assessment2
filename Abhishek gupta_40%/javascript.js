function toggleMenu() {
    var navbarRight = document.querySelector(".navbar-right");
    navbarRight.classList.toggle("responsive");
}

const navbar = document.querySelector('.navbar');
        navbar.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });