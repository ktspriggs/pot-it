$(document).ready(function() {
    var mobileMenuBurger = $('.mobile-menu-burger');
    var burgerClosed = $('.burger-closed');
    var burgerOpen = $('.burger-open');
    var mobileMenu = $('.mobile-menu');
    var mainContent = $('.main-content');
    var mobileMenuLink = $('.menu li a');

    //menu opens and closes and main content opacity changes//
    mobileMenuBurger.on('click', function () {
        burgerOpen.toggleClass('display-none');
        burgerClosed.toggleClass ('display-none');
        mobileMenu.toggleClass('display-none');
        mainContent.toggleClass('opacity');
    });

    //click on burgerClosed menu transitions open//
    burgerClosed.on('click', function () {
       mobileMenu.slideToggle("slow");
    });

    //click on burgerOpen menu transitions closed//
    burgerOpen.on('click', function () {
        mobileMenu.slideToggle("slow");
     });

    //when nav-link clicked menu changes to burgerClosed and opacity changes//
     mobileMenuLink.on('click', function () {
        burgerOpen.toggleClass('display-none');
        burgerClosed.toggleClass('display-none');
        mobileMenu.slideToggle("slow");
        mainContent.toggleClass('opacity');
     });

});









