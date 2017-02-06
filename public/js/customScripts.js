$( document ).ready(function() {
    var menuBtn = document.getElementById('menuButton');
    var menuListItem = document.getElementById('menuItem');

	menuBtn.addEventListener('click', function() {
	    $('.outer-container').toggleClass('blur');
	}, false);
	menuBtn.addEventListener('click', function() {
	    $('.sc-nav-menu').toggleClass('bg-init');
	}, false);
	menuBtn.addEventListener('click', function() {
	    $('.sc-nav-collapse').toggleClass('vsbl');
	}, false);

	menuListItem.addEventListener('click', function() {
		$('.outer-container').removeClass('blur');
	}, false);
	menuListItem.addEventListener('click', function() {
		$('.sc-nav-menu').removeClass('bg-init');
	}, false);
	menuListItem.addEventListener('click', function() {
		$('.sc-nav-collapse').removeClass('vsbl');
	}, false);

});

// Close Menu Button 

$( document ).ready(function() {
    var closeBtn = document.getElementById('closeMenu');

	closeBtn.addEventListener('click', function() {
		$('.outer-container').removeClass('blur');
	}, false);
	closeBtn.addEventListener('click', function() {
		$('.sc-nav-menu').removeClass('bg-init');
	}, false);
	closeBtn.addEventListener('click', function() {
		$('.sc-nav-collapse').removeClass('vsbl');
	}, false);

});


// Navbar Scroll 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar-default");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
});


// Entry Button Animation Trigger

$( document ).ready(function() {
    var enterBtn = document.getElementById('enter-btn');

	enterBtn.addEventListener('click', function() {
	    $('.menu-bg').toggleClass('expand'),
	    $('.enter-site-btn').toggleClass('switch'),
	    $('.work-btn').toggleClass('switch'),
	    $('.title-cont').addClass('allow');
	}, false);
	
	enterBtn.addEventListener('click', function() {
	    $('.sc-logo-cont').toggleClass('svg-anim');
	}, false);

});





