const menu = document.querySelector('.menu');
const menuItem = document.querySelector('menu-item');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle('menu-active');
});

if (menuItem) {
  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger-active');
      menu.classList.toggle('menu-active');
    });
  });
}
