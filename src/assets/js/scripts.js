'use strict';

$(document).ready(function(){
  loaderHome();
});

function loaderHome() {
  var ele = $('.js-hero-image'),
      originalImage = ele.find('.img');

  $("<img/>")
    .attr("src", $(originalImage).attr("src"));
    .on('load', function() {
        ele.addClass('active');
    })
    .on('error', function() {
      console.log("error loading image");
    })

}
