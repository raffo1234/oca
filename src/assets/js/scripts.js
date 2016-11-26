'use strict';

$(document).ready(function(){
  appear();
  homeSlider();
  menuFixed();
  modal();
});

function sectionAppear(){
  var ele = $('.appear');

  $(window).scroll(function(){
    var self = $(this);
    var winScrollTop = self.scrollTop();

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
  var ele = $('.owl-carousel'),
  item_slider = $('.hero-slider__item');

  var btn_1 = $('.js-button-1'),
  btn_2 = $('.js-button-2');

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
    navText: ["",""],
    onInitialize: function(){
      setTimeout(function(){ btn_1.addClass('active'); }, 800);
      setTimeout(function(){ btn_2.addClass('active'); }, 1600);
    }
  });


}


// ADD RULE REGEX TO VALIDATION JQUERY PLUGIN

$.validator.addMethod("regex", function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
}, "");


// APPEAR EFFECT

function appear() {
  var ele = $('.appear');

  if (Modernizr.touch) {
      ele.addClass('active');
  } else {

    ele.map(function(i, n){

      $(n).waypoint(function () {
          $(n).addClass('active');
      }, {offset: '88%'});
    });
  }
}



// MODAL

function modal() {
  var modal = $('.js--modal'),
    modal__inner = $('.modal__inner'),
    btn__open = $('.button--open-modal'),
    btn__close = $('.button--close-modal');

    btn__close.on('click', function(){
      modal__inner.removeClass('active');
      setTimeout(function(){
        modal.removeClass('active');
      }, 100);
    });

    $('body').on('click', function(){
      modal__inner.removeClass('active');
      modal.removeClass('active');
    });

    modal__inner.on('click', function(e){
      e.stopPropagation();
    })
}
