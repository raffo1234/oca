'use strict';

$(document).ready(function(){

  homeSlider();
  menuFixed();
});

$(window).on('load', function(){
  loaderHome();
});

function menuFixed(){
  var header = $('.header'),
      topHeight = $('.top').outerHeight(),
      body = $('body');

  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();

    if(winScrollTop >= topHeight) {
      body.addClass('top-fixed');
    } else {
      body.removeClass('top-fixed');
    }
  })
}

function homeSlider(){
  var ele = $('.owl-carousel');

  ele.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    lazyLoad: true,
    smartSpeed: 650,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: false,
    touchDrag: false,
    navText: ["",""]
  });
}

function loaderHome() {
  var ele = $('.hero-slider'),
      originalImage = ele.find('.img');

  var btn_1 = $('.js-button-1'),
      btn_2 = $('.js-button-2');

      ele.addClass('active');

      setTimeout(function(){ btn_1.addClass('active'); }, 800);
      setTimeout(function(){ btn_2.addClass('active'); }, 1600);

}


// ADD RULE REGEX TO VALIDATION JQUERY PLUGIN

$.validator.addMethod("regex", function (value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
  }, "");
