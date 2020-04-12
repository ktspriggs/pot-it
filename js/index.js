$(document).ready(function() {
    var mobileMenuBurger = $('.mobile-menu-burger');
    var burgerClosed = $('.burger-closed');
    var burgerOpen = $('.burger-open');
    var mobileMenu = $('.mobile-menu');

    mobileMenuBurger.on('click', function () {
        burgerOpen.toggleClass('display-none');
        burgerClosed.toggleClass ('display-none');
        mobileMenu.toggleClass('display-none');
    });
});

















