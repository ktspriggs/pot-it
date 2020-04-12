$(document).ready(function() {
    var mobileMenuBurger = $('.mobile-menu-burger');
    var burgerClosed = $('.burger-closed');
    var burgerOpen = $('.burger-open');
    var mobileMenu = $('.mobile-menu');
    var mobileMenuLink = $('.menu li a')

    mobileMenuBurger.on('click', function () {
        burgerOpen.toggleClass('display-none');
        burgerClosed.toggleClass ('display-none');
        mobileMenu.toggleClass('display-none');
    });

    burgerClosed.on('click', function () {
       mobileMenu.slideToggle("slow");
    });

    burgerOpen.on('click', function () {
        mobileMenu.slideToggle("slow");

     });

     mobileMenuLink.on('click', function () {
        mobileMenu.slideToggle("slow");
        burgerOpen.toggleClass('display-none');
        burgerClosed.toggleClass('display-none');
     });

});









