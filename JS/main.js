$(document).ready(function () {
    $('.toggle').click(function () {
        $('.ul-navbar').show();
    });
    $('li').click(function () {
        if (mediaQuery.matches) {
            $('.ul-navbar').hide();
        }
    });
});

function navbarDisplay(mediaQueryx) {
    if (mediaQuery.matches) {
        $('.ul-navbar').hide();
    } else {
        $('.ul-navbar').show();
    }
};

var mediaQuery = window.matchMedia("(max-width: 1100px)");
navbarDisplay(mediaQuery);
mediaQuery.addListener(navbarDisplay);