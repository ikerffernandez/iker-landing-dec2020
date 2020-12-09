$(".toggle").click(
  function () {
    $('img').toggleClass('img-visible');
    $('.image-1').toggleClass('image-1-visible');  
    $('.image-2').toggleClass('image-2-visible'); 
    $('.image-3').toggleClass('image-3-visible');     
    $('.image-4').toggleClass('image-4-visible');
    $('.image-5').toggleClass('image-5-visible');     
    $('.image-6').toggleClass('image-6-visible');   
    $('.toggle').toggleClass('toggle-active');                
      }, 
);


$(".toggle").mouseover(
  function () { 
    $('.toggle').addClass('toggle-hover');                
      }, 
);

$(".toggle").mouseout(
  function () { 
    $('.toggle').removeClass('toggle-hover');                
      }, 
);


// $(".logo-image, .title, .tagline").click(
//   function () {
//     $('img').removeClass('img-visible');
//     $('.image-1').removeClass('image-1-visible');    
//     $('.image-2').removeClass('image-2-visible');  
//     $('.image-3').removeClass('image-3-visible');         
//     $('.image-4').removeClass('image-4-visible');  
//     $('.image-5').removeClass('image-5-visible');    
//     $('.image-6').removeClass('image-6-visible');   
//     $('.logo-image').removeClass('logo-image-hover');                                      
//   }, 
// );