Site = {};

$(document).ready( function(){
  // root size
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
  $(window).resize(changeRootFontSize);

  $('#dropdown').on('click', function(){
    $('#dropdown_links').toggleClass('show');
  });

  Site.slideshow_array;
  Site.slideshow_length;
  Site.slide_count = 0;

  loadBouncingImages();

  $('#about_link').on('click', function(){
    var string = $(this).text();
    if (string.includes('?')) {
      $(this).empty().append('Close');
    }else{
      $(this).empty().append('? ? ?');
    };
    $('#about_text').toggleClass('show');
  })

  $('#contact').on('click', function(){
    var string = $(this).text();
    if (string.includes('on')) {
      $(this).empty().append('Close');
      $('#cv').empty().append('C.V.');
      $('#contact_container').addClass('show');
      $('#bio_container').removeClass('show');
      $('#cv_container').removeClass('show');
    }else{
      $(this).empty().append('Contact');
      $('#contact_container').removeClass('show');
      $('#bio_container').addClass('show');
    };
  })

  $('#cv').on('click', function(){
    var string = $(this).text();
    if (string.includes('V')) {
      $(this).empty().append('Close');
      $('#contact').empty().append('Contact');
      $('#contact_container').removeClass('show');
      $('#bio_container').removeClass('show');
      $('#cv_container').addClass('show');
    }else{
      $(this).empty().append('C.V.');
      $('#bio_container').addClass('show');
      $('#cv_container').removeClass('show');
    };
  })

  //slideshow

  slideshowSetUp();

  $('#nav_right').on('click', function(){
    navNext();
  });
  $('#nav_left').on('click', function(){
    navPrev();
  });

})

changeRootFontSize = function() {
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
  loadBouncingImages();
}

slideshowSetUp = function() {
  Site.slideshow_array = $('.slideshow_container .slide');
  Site.slideshow_length = Site.slideshow_array.length - 1;
}

navNext = function() {
  Site.slide_count = Site.slide_count + 1;
  if (Site.slide_count > Site.slideshow_length) {
    Site.slide_count = 0;
  }
  $('.slide').removeClass('show');
  $('#description').empty();
  var slide = Site.slideshow_array[Site.slide_count];
  $(slide).addClass('show');
  $('#description').append($('.show').data('description'));
}

navPrev = function() {
  Site.slide_count = Site.slide_count - 1;
  if (Site.slide_count < 0) {
    Site.slide_count = Site.slideshow_length;
  }
  $('.slide').removeClass('show');
  $('#description').empty();
  var slide = Site.slideshow_array[Site.slide_count];
  $(slide).addClass('show');
  $('#description').append($('.show').data('description'));
}