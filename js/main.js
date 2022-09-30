//Hamburger menu
const btnHamburger = document.querySelector('.header__body-hamburger'),
   menuMobile = document.querySelector('.header__mobaile'),
   headerBody = document.querySelector('.header__body');



btnHamburger.addEventListener('click', function () {
   menuMobile.classList.toggle('active');
   btnHamburger.classList.toggle('active-hamburger');
});

//tabs

function openTab(evt, tabName) {
   let i, tabcontent, tablinks;

   tabcontent = document.getElementsByClassName('offer__section');
   for (i = 0; i < tabcontent.length; i++) {
      // tabcontent[i].className += '';
   }

   tablinks = document.getElementsByClassName('offer__item');
   for (i = 0; i < tabcontent.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('offer__item-active');
      tabcontent[i].className = tabcontent[i].className.replace('offer__section-active');
   }

   document.getElementById(tabName).className += ' offer__section-active';
   evt.currentTarget.className += ' offer__item-active';
}


