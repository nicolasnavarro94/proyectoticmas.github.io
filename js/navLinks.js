// Obtén todos los elementos de navegación
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', function() {

    navLinks.forEach(link => link.classList.remove('active'));

    this.classList.add('active');
  });
});