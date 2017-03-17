// Entry Button Animation Trigger

//$( document ).ready(function() {
//   var enterBtn = document.getElementById('enter-btn');
//
//	enterBtn.addEventListener('click', function() {
//	    $('.menu-bg').toggleClass('expand'),
//	    $('.enter-site-btn').toggleClass('switch'),
//	    $('.work-btn').toggleClass('switch'),
//	    $('canvas').toggleClass('switch'),
//	    $('.title-cont').addClass('allow');
//	}, false);
//	
//	enterBtn.addEventListener('click', function() {
//	    $('.sc-logo-cont').toggleClass('svg-anim');
//	}, false);
//});

//  Button Page Load Delay

$(window).load(function() {
    $(".enter-site-btn").delay(2000).css('opacity', '1');
});