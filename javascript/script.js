/* === MENU NAVBAR === */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* === TAMPILAN MENU === */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* === MENU TUTUP === */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close');

/* Search show */
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        search.classList.add('show-search');
    });
}

/* Search hidden */
if (searchClose) {
    searchClose.addEventListener('click', () => {
        search.classList.remove('show-search');
    });
}

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
    loginBtn = document.getElementById('login-btn'),
    loginClose = document.getElementById('login-close');

/* Login show */
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        login.classList.add('show-login');
    });
}

/* Login hidden */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login');
    });
}

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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    if ($.fn.counterUp) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }
})(jQuery);

/* <!--============================ SERVICE =============================== --> */
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.jenis .box-container .box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'var(--cyan)';
            box.style.color = 'var(--primary)';
            box.style.transform = 'scale(1.05)';
        });

        box.addEventListener('mouseout', () => {
            box.style.backgroundColor = ''; // Reset ke nilai default
            box.style.color = '';
            box.style.transform = 'scale(1)';
        });
    });
});
/* <!--============================ SERVICE END =============================== --> */
