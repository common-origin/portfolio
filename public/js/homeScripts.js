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

/// DESKTOP ////
// About Text Opacity on Scroll

$(window).load(function() {

	$(document).scroll(function(e){
		var textTarget = $('.aboutUs');
		var targetHeight = textTarget.outerHeight();
		if ($(window).width() >= 768) { 
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      textTarget.css('opacity', scrollPercent);
	    }
	  };
	});

// DH Nav Text Opacity on Scroll



	$(document).scroll(function(e){
		var navTarget = $('#dh-target');
		var target = $('.aboutUs')
		var targetHeight = target.outerHeight();		
		if ($(window).width() >= 768) { 
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      navTarget.css('opacity', scrollPercent);
	    }
	  };
	});


// Arrow Opacity on Scroll
	$(document).scroll(function(e){
		var a = $('.index-arrow');
		var target = $('.aboutUs')
		var targetHeight = target.outerHeight();
		if ($(window).width() >= 768) { 
	    var scrollPercent = ( targetHeight - window.scrollY ) / targetHeight;
	    if(scrollPercent >= 0){
	      a.css('opacity', scrollPercent);
	    }
	  };
	});


// Background Opacity on Scroll

	$(document).scroll(function(e){
		var bg = $('.bg-color-overlay');
		var target = $('.aboutUs')
		var targetHeight = target.outerHeight();
		if ($(window).width() >= 768) { 
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      bg.css('opacity', scrollPercent);
	    }
	  };
	});



/// MOBILE ////

// Arrow Opacity on Scroll

	/*$(document).scroll(function(e){
		var a = $('.index-arrow');
		var target = $('#heightRowMob');
		var targetHeight = target.outerHeight();
		if ($(window).width() < 768) { 
	    var scrollPercent = ( targetHeight - window.scrollY ) / targetHeight;
	    if(scrollPercent >= 0){
	      a.css('opacity', scrollPercent);
	    }
	  };
	});


// Background Opacity on Scroll

	/*$(document).scroll(function(e){
		var bg = $('.bg-color-overlay');
		var target = $('#heightRowMob');
		var scrollTop = $(this).scrollTop();
		var targetHeight = target.outerHeight();
		if ($(window).width() < 768) { 
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      bg.css('opacity', scrollPercent);
	    }
	  };
	});*/





});

$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	$('.bg-color-overlay').css({
	  opacity: function() {
	    var elementHeight = $(this).height(),
	        opacity = ((1 - (elementHeight - scrollTop) / elementHeight));

	    return opacity;
	  }
	});
	$('.index-arrow').css({
	  opacity: function() {
	    var elementHeight = $(this).height(),
	        opacity = ((elementHeight - scrollTop) / elementHeight);

	    return opacity;
	  }
	});
});
