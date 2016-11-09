'use strict';

$(document).ready(function(){
  homeSlider();
  menuFixed();
  appear();
});

$(window).on('load', function(){
  loaderHome();
});

function sectionAppear(){
  var ele = $('.appear');

  $(window).scroll(function(){
    var self = $(this);
    var winScrollTop = self.scrollTop();
    console.log(winScrollTop);
    ele.map(function(i, n){
      if(winScrollTop  >= $(n).offset().top + 1000) {
        $(n).addClass('active');
      }
    });
  });
}

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


// APPEAR EFFECT

function appear() {
  console.log('hola');
  var ele = $('.appear');

  if (Modernizr.touch) {
      ele.addClass('active');
  } else {

    ele.map(function(i, n){
      console.log($(n));
      $(n).waypoint(function () {
          $(n).addClass('active');
      }, {offset: '88%'});
    });



  }
}
