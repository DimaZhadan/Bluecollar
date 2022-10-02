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

//Slider



$(document).ready(function () {
   $('.feedback__slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left__arrow.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>',
      autoplay: true,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      adaptiveHeight: true
   });

   $('form').submit(function (e) {
      e.preventDefault();

      $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
      }).done(function () {
         $(this).find("input").val("");
         $('form').trigger('reset');
      });
      return false;
   });
});

