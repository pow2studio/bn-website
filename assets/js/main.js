$(document).ready(function () {
  var $window = $(window);
  var $welcome = $('.sec-welcome');

  function init() {
    initIntroAnimation();
    initMembers();
  }

  function initIntroAnimation() {
    var imgUrl = '/assets/img/bn_cover.jpg';
    if ($window.scrollTop() === 0) {
      var $wh = $('#welcome-heading');
      $wh.hide();
      $('.transp').css({ opacity: 0 });
      var img = $('<img />').on('load', function () {
        renderBg($welcome, imgUrl);
        $(this).remove();
        new Vivus('bn-icon', { duration: 50 }, function () {
          $wh.slideToggle(600, function () {
            $('.o0').animate({ opacity: 1 }, 2000);
          });
        });
      });
      img.attr('src', imgUrl);
    } else {
      renderBg($welcome, imgUrl);
      $('.o0').css({ opacity: 1 });
    }
  }

  function initMembers() {
    var mixer = mixitup('.members');
    mixer.filter('.cat-a');
  }

  function renderBg(el, imgUrl) {
    el.css('background', 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),' +
      'url(' + imgUrl + ') center center');
    el.css('background-size', 'auto, cover');
  }

  init();
});