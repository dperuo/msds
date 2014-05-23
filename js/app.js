$(document).ready(function () {

  $(document).foundation({
    accordion: {
      toggleable: false   // only close accordion panels when another is opened
    }
  });
    
  $('#link1').click(function(){
    $('#title1').removeClass('hide');
    $('#title2, #title3').addClass('hide');
    
    $('#icon1').removeClass('hide');
    $('#icon2, #icon3').addClass('hide');
    
    $('#iphone1').removeClass('hide');
    $('#iphone2, #iphone3').addClass('hide');
    
    $('#arrow1').attr('src','img/arrow-up.png')
    $('#arrow2, #arrow3').attr('src','img/arrow-down.png')
  });
  
  $('#link2').click(function(){
    $('#title2').removeClass('hide');
    $('#title1, #title3').addClass('hide');
    
    $('#icon2').removeClass('hide');
    $('#icon1, #icon3').addClass('hide');
    
    $('#iphone2').removeClass('hide');
    $('#iphone1, #iphone3').addClass('hide');
    
    $('#arrow2').attr('src','img/arrow-up.png')
    $('#arrow1, #arrow3').attr('src','img/arrow-down.png')
    
  });

  $('#link3').click(function(){
    $('#title3').removeClass('hide');
    $('#title1, #title2').addClass('hide');
    
    $('#icon3').removeClass('hide');
    $('#icon1, #icon2').addClass('hide');
    
    $('#iphone3').removeClass('hide');
    $('#iphone1, #iphone2').addClass('hide');
    
    $('#arrow3').attr('src','img/arrow-up.png')
    $('#arrow1, #arrow2').attr('src','img/arrow-down.png')
  });
  
});
