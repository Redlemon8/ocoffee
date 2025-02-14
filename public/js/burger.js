const burgerMenu = document.getElementById('burger-menu');
const navUL = document.querySelector('#main-nav ul');

burgerMenu.addEventListener('click', () => {
  navUL.classList.toggle('active');
});
