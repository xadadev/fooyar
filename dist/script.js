/* -------- HAMBURGER MENU JS ------- */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});

/* ------------ SPLIDE JS ----------- */

