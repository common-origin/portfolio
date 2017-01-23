$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.mouse-container').fadeOut();
     }
    else
     {
      $('.mouse-container').fadeIn();
     }
});