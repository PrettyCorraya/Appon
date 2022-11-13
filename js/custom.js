$(function(){
    new VenoBox({
        selector: '.my-video-links',
    });


    $('.slick_slide').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      speed: 800,
      arrows: false,
    });    
});


