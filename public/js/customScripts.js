$( document ).ready(function() {
    var menuBtn = document.getElementById('menuButton');
    var menuListItem = document.getElementById('menuItem');

	menuBtn.addEventListener('click', function() {
	    $('.outer-container').toggleClass('blur');
	}, false),
	menuBtn.addEventListener('click', function() {
	    $('.sc-nav-menu').toggleClass('bg-init');
	}, false),
	menuBtn.addEventListener('click', function() {
	    $('.sc-nav-collapse').toggleClass('vsbl');
	}, false),

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

