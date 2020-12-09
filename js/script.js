$(".logo-image, .title, .tagline").mouseenter(
  function () {
    $('img').addClass('img-visible');
    $('.image-1').addClass('image-1-visible');  
    $('.image-2').addClass('image-2-visible'); 
    $('.image-3').addClass('image-3-visible');     
    $('.image-4').addClass('image-4-visible');
    $('.image-5').addClass('image-5-visible');     
    $('.image-6').addClass('image-6-visible');  
    $('.logo-image').addClass('logo-image-hover');                 
      }, 
);

$(".logo-image, .title, .tagline").mouseleave(
  function () {
    $('img').removeClass('img-visible');
    $('.image-1').removeClass('image-1-visible');    
    $('.image-2').removeClass('image-2-visible');  
    $('.image-3').removeClass('image-3-visible');         
    $('.image-4').removeClass('image-4-visible');  
    $('.image-5').removeClass('image-5-visible');    
    $('.image-6').removeClass('image-6-visible');   
    $('.logo-image').removeClass('logo-image-hover');                                      
  }, 
);