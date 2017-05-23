$(document).ready(function () {
  $('.philosophy .cover').parallax({
    imageSrc: '/assets/img/cover_areas.jpg',
    naturalWidth: 1280,
    naturalHeight: 400,
    speed: 0.8
  });
  $('.team .cover').parallax({
    imageSrc: '/assets/img/cover_team.jpg',
    naturalWidth: 1280,
    naturalHeight: 400,
    speed: 0.8
  });
  $('.contact .cover').parallax({
    imageSrc: '/assets/img/cover_contact.jpg',
    naturalWidth: 1280,
    naturalHeight: 400,
    speed: 0.8
  });
  $('.fix-height').css('min-height', function () {
    return $(this).height()
  });
  var mixer = mixitup('.members', {
    callbacks: {
      onMixEnd: function () {
        $(window).trigger('resize').trigger('scroll');
      }
    }
  });
});