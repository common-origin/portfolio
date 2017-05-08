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


// About Text Opacity on Scroll

$(window).load(function() {

	var textTarget = $('.aboutUs');
	var targetHeight = textTarget.outerHeight();

	$(document).scroll(function(e){
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      textTarget.css('opacity', scrollPercent);
	    }
	});
});

// DH Nav Text Opacity on Scroll

$(window).load(function() {

	var navTarget = $('#dh-target');
	var target = $('.aboutUs')
	var targetHeight = target.outerHeight();

	$(document).scroll(function(e){
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      navTarget.css('opacity', scrollPercent);
	    }
	});
});

// Arrow Opacity on Scroll

$(window).load(function() {

	var a = $('.index-arrow');
	var target = $('.aboutUs')
	var targetHeight = target.outerHeight();

	$(document).scroll(function(e){
	    var scrollPercent = ( targetHeight - window.scrollY ) / targetHeight;
	    if(scrollPercent >= 0){
	      a.css('opacity', scrollPercent);
	    }
	});
});

// Background Opacity on Scroll

$(window).load(function() {

	var bg = $('.bg-color-overlay');
	var target = $('.aboutUs')
	var targetHeight = target.outerHeight();

	$(document).scroll(function(e){
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      bg.css('opacity', scrollPercent);
	    }
	});
});