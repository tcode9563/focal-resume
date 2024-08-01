(function($){
'use strict';

// menu-slide
$('.menu-icon').on('click', function () {
    $('.menu-slide').animate({right: 0});
});

// menu-close
$('.menu-close').on('click', function (){
    $('.menu-slide').animate({right: '-100vw'});
})









})(jQuery);