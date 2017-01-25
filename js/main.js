$(document).ready( function(){
  // root size
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
  $(window).resize(changeRootFontSize);

  $('#dropdown').on('click', function(){
    $('#dropdown_links').toggleClass('show');
  });

  loadBouncingImages();
})

changeRootFontSize = function() {
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
  loadBouncingImages();
}