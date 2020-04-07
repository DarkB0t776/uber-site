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

//Smooth Scrolling

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
