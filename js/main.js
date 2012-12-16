$(document).ready(function () {
  var circleTop = window.innerHeight / 2 - 200,
    nameTop = (window.innerHeight / 2 - 200) / 2 - 20,
    linksBottom = (window.innerHeight / 2 - 200) / 2 - 15;
  $('.circle').css('top', circleTop);
  setTimeout(function() {
    $('.name').animate({'top': nameTop + 'px'}, 'slow');
  }, 400);
  setTimeout(function() {

    $('.links').animate({'bottom': linksBottom + 'px'}, 'slow');
  }, 1000);


});