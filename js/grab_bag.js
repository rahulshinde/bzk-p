$(document).ready( function(){ 
  $('.image').each(function(){
    var width = Math.floor((Math.random()) * (50 - 20)) + 20;
    console.log(width);
    $(this).css({'width': width + '%'});
  });
      
})