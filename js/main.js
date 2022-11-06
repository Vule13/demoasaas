$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('header').addClass('sticky');
    }
    else{
      $('header').removeClass('sticky');
    }
  });
});


$('.contact-carousel').owlCarousel({
  loop: true,
  items: 5,
  center: true,
  autoplayTimeout: 4000,
  smartSpeed: 1000,
  autoplay: true,
  autoplayHoverPause: true,
  responsive : {
    0: {
      items: 1,
    },
    379: {
      items: 3,
    },
    767: {
      items: 5,
    },
  }
})
$('.owl-carousel').owlCarousel({
  loop:true,
 // margin:10,
  dots:true,
  autoplay: true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$(document).ready(function(){
  $('.task-bar').click(function(){
    $('ul').toggleClass('show')
  });
});