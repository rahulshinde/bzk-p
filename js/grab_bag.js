$(document).ready( function(){ 
  $('.image').each(function(){
    var width = Math.floor((Math.random()) * (50 - 20)) + 20;
    var padding = Math.floor((Math.random()) * (4 - 1)) + 1;
    console.log(width);
    $(this).css({'width': width + '%', 'padding': padding + "rem"});
  });
      
})