'use strict';

$(document).ready(function(){
  loaderHome();
  homeSlider();
});


function homeSlider(){
  var ele = $('.owl-carousel');

  ele.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    lazyLoad: true,
    smartSpeed: 650,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: false,
    touchDrag: false

  });
}

function loaderHome() {
  var ele = $('.js-hero-image'),
      originalImage = ele.find('.img');

  var btn_1 = $('.js-button-1'),
      btn_2 = $('.js-button-2');

      setTimeout(function(){ btn_1.addClass('active'); }, 800);
      setTimeout(function(){ btn_2.addClass('active'); }, 1600);

}
