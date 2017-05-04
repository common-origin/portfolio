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
	var target = $('div.background');
	var targetHeight = target.height();
	var containerHeight = $('#container').outerHeight();

	var maxScroll = containerHeight - targetHeight;
	var scrollRange = maxScroll/(target.length-1);

	$(document).scroll(function(e){
	    var scrollY = $(window).scrollTop();
	    var scrollPercent = (scrollRange - scrollY%scrollRange)/scrollRange;
	    var divIndex = Math.floor(scrollY/scrollRange);

	    target.has(':lt(' + divIndex + ')').css('opacity', 0);
	    target.eq(divIndex).css('opacity', scrollPercent);
	    target.has(':gt(' + divIndex + ')').css('opacity', 1);
	});
});