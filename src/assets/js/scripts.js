'use strict';

$(document).ready(function(){
  loaderHome();
});

function loaderHome() {
  var ele = $('.js-hero-image'),
      originalImage = ele.find('.img');

  var btn_1 = $('.js-button-1'),
      btn_2 = $('.js-button-2');

  $("<img/>")
    .attr("src", $(originalImage).attr("src"))
    .on('load', function() {
        ele.addClass('active');
        setTimeout(function(){ btn_1.addClass('active'); }, 800);
        setTimeout(function(){ btn_2.addClass('active'); }, 1600);
    })
    .on('error', function() {
      console.log("error loading image");
    });
}
