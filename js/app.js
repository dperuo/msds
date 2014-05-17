// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).ready(function () {

  $(document).foundation({
    accordion: {
      toggleable: false   // only close accordion panels when another is opened
    }
  });
    
  $('#link1').click(function(){
    $('#title1').removeClass('hide');
    $('#title2').addClass('hide');
    $('#title3').addClass('hide');
    
    $('#icon1').removeClass('hide');
    $('#icon2').addClass('hide');
    $('#icon3').addClass('hide');
    
    $('#iphone1').removeClass('hide');
    $('#iphone2').addClass('hide');
    $('#iphone3').addClass('hide');
  });
  
  $('#link2').click(function(){
    $('#title1').addClass('hide');
    $('#title2').removeClass('hide');
    $('#title3').addClass('hide');
    
    $('#icon1').addClass('hide');
    $('#icon2').removeClass('hide');
    $('#icon3').addClass('hide');
    
    $('#iphone1').addClass('hide');
    $('#iphone2').removeClass('hide');
    $('#iphone3').addClass('hide');
    
  });

  $('#link3').click(function(){
    $('#title1').addClass('hide');
    $('#title2').addClass('hide');
    $('#title3').removeClass('hide');
    
    $('#icon1').addClass('hide');
    $('#icon2').addClass('hide');
    $('#icon3').removeClass('hide');
    
    $('#iphone1').addClass('hide');
    $('#iphone2').addClass('hide');
    $('#iphone3').removeClass('hide');
  });
  
});