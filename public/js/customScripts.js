



$( document ).ready(function() {
  var menuBtn = document.getElementById('menuButton');
  var menuListItem = document.getElementById('menuItem');

	menuBtn.addEventListener('click', function() {
	   $('.outer-container').toggleClass('blur');
     $('#mobile-menu').toggleClass('open');
	}, false);
});



// Navbar Toggle Animation


// Close Menu Button 

$(window).on('click', function() {
	$('.outer-container').removeClass('blur');
	$('#menu-toggle').removeClass('open');
	$('#coverLayer').removeClass('open');
	$('.sidebar-wrap').removeClass('hidden');
})



// Navbar Scroll 

$( document ).ready(function() {
  //caches a jQuery object containing the header element
  var header = $(".navbar-default");
  var pageHead = $(".page-nav-cont");
  //var pageTitle = $(".title-row");
  var sidebar = $(".sidebar-menu");
  var pagination = $(".pagination");

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
    if (scroll > 60) {
      pageHead.addClass("scrolled");
      //pageTitle.addClass("scrolled");
      sidebar.addClass("scrolled");
      pagination.addClass("scrolled");
    } else {
      pageHead.removeClass("scrolled");
      //pageTitle.removeClass("scrolled");
      sidebar.removeClass("scrolled");
      pagination.removeClass("scrolled");
    }
    if ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 500 ){
      sidebar.removeClass("scrolled");
    }
  });
});


// Cat Menu Hover from Project Card

$('.project-card').hover(function() {
  $('.cat-menu').toggleClass("hover");
  $('.separator').toggleClass("hover");

});
$('.page-nav-cont').hover(function() {
  $('.cat-menu').toggleClass("hover");
  $('.separator').toggleClass("hover");
});
$('.carousel').hover(function() {
  $('.cat-menu').toggleClass("hover");
  $('.separator').toggleClass("hover");
});


