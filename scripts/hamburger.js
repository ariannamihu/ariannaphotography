const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
