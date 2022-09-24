const btnHamburger = document.querySelector('.header__body-hamburger'),
   menuMobile = document.querySelector('.header__mobaile'),
   headerBody = document.querySelector('.header__body');



btnHamburger.addEventListener('click', function () {
   menuMobile.classList.toggle('active');
   btnHamburger.classList.toggle('active-hamburger');
});


