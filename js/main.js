$(document).ready(function () {
  var circleTop = window.innerHeight / 2 - 200,
    nameTop = (window.innerHeight / 2 - 200) / 2 - 20,
    linksBottom = (window.innerHeight / 2 - 200) / 2 - 15;
  $('.circle').css('top', circleTop);
  $('.links').css('bottom', linksBottom);
  setTimeout(function() {
    $('.name').animate({ top: nameTop + 'px' }, 'slow');
  }, 400);
  setTimeout(function() {
    $('.links').fadeIn();
  }, 1000);

  $('.hover-glow').hover(function() {
    $(this).stop().animate({ opacity: '1', color: 'yellow' });
  }, function() {
    $(this).stop().animate({ opacity: '0.8', color: '#FFF' }, 'slow');
  });


});