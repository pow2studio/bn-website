$(document).ready(function () {

  var $w = $('.welcome');
  var imgUrl = '/assets/img/bn_cover.jpg';
  if (document.body.scrollTop === 0) {
    var $wh = $('#welcome-heading');
    $wh.hide();
    $('.transp').css({ opacity: 0 });
    var img = $("<img />").on('load', function () {
      renderBg($w, imgUrl);
      $(this).remove();
      new Vivus('bn-icon', { duration: 50 }, function () {
        $wh.slideToggle(600, function () {
          $('.transp').animate({ opacity: 1 }, 2400);
        });
      });
    });
    img.attr('src', imgUrl);
  } else
    renderBg($w, imgUrl);

  function renderBg(el, imgUrl) {
    el.css('background', 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),' +
      'url(' + imgUrl + ') center center');
    el.css('background-size', 'auto, cover');
  }

  $('.philosophy .cover').parallax({
    imageSrc: '/assets/img/cover_areas_d.jpg',
    naturalWidth: 1280,
    naturalHeight: 400,
    speed: 0.8
  });
  $('.team .cover').parallax({
    imageSrc: '/assets/img/cover_team_d.jpg',
    naturalWidth: 1280,
    naturalHeight: 400,
    speed: 0.8
  });
  $('.contact .cover').parallax({
    imageSrc: '/assets/img/cover_contact_d.jpg',
    naturalWidth: 1280,
    naturalHeight: 400,
    speed: 0.8
  });
  $('.fix-height').css('min-height', function () {
    return $(this).height()
  });
  mixitup('.members', {
    callbacks: {
      onMixEnd: function () {
        $(window).trigger('resize').trigger('scroll');
      }
    }
  });
  var nav = $('.navbar-collapse');
  nav.on('click', 'a:not([data-toggle])', null, function () {
    nav.collapse('hide');
  });
});