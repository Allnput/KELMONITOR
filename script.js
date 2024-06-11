/* === MENU NAVBAR === */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* === TAMPILAN MENU === */
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})

/* === MENU TUTUP */
navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})

(function ($) {
   "use strict";
   
   // Dropdown on mouse hover
   $(document).ready(function () {
       function toggleNavbarMethod() {
           if ($(window).width() > 992) {
               $('.navbar .dropdown').on('mouseover', function () {
                   $('.dropdown-toggle', this).trigger('click');
               }).on('mouseout', function () {
                   $('.dropdown-toggle', this).trigger('click').blur();
               });
           } else {
               $('.navbar .dropdown').off('mouseover').off('mouseout');
           }
       }
       toggleNavbarMethod();
       $(window).resize(toggleNavbarMethod);
   });
   
   
   // Back to top button
   $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
           $('.back-to-top').fadeIn('slow');
       } else {
           $('.back-to-top').fadeOut('slow');
       }
   });
   $('.back-to-top').click(function () {
       $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
       return false;
   });


   // Facts counter
   $('[data-toggle="counter-up"]').counterUp({
       delay: 10,
       time: 2000
   });


   // Testimonials carousel
   $(".testimonial-carousel").owlCarousel({
       autoplay: true,
       smartSpeed: 1000,
       dots: true,
       loop: true,
       margin: 30,
       responsive: {
           0:{
               items:1
           },
           576:{
               items:1
           },
           768:{
               items:2
           },
           992:{
               items:3
           }
       }
   });


   // Related Post carousel
   $(".related-carousel").owlCarousel({
       autoplay: true,
       smartSpeed: 1000,
       dots: true,
       loop: true,
       margin: 30,
       responsive: {
           0:{
               items:1
           },
           576:{
               items:1
           },
           768:{
               items:2
           }
       }
   });
   
})(jQuery);


