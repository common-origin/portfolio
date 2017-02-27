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
    var closeBtn = document.getElementById('cross');

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


// Navbar Toggle Animation

$('#menu-toggle').click(function(){
	$(this).toggleClass('open');
})



// Navbar Scroll 

$( document ).ready(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar-default");
    var pageHead = $(".page-nav-cont");
    var pageTitle = $(".title-row");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
        if (scroll > 60) {
            pageHead.addClass("scrolled");
            pageTitle.addClass("scrolled");
        } else {
            pageHead.removeClass("scrolled");
            pageTitle.removeClass("scrolled");
        }
    });
});


// Hide Footer On Homepage

$( document ).ready(function() {
    //caches a jQuery object containing the header element
    var body = $("#canvasContainer");
	    $("footer").hide();
});


