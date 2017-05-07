// Add class to <body> for each page

$( document ).ready(function() {
  var newClass = window.location.href;
  newClass = newClass.substring(newClass.lastIndexOf('http://localhost:3000')+22);
  $('body').addClass(newClass);
});

// Mobile Toggle Button add classes

$( document ).ready(function() {
  var menuBtn = document.getElementById('menuButton');
  var menuListItem = document.getElementById('menuItem');

  menuBtn.addEventListener('click', function() {
    $('.outer-container').toggleClass('blur');
    $('#mobile-menu').toggleClass('open');
  }, false);

});


// Add Open Class to  Home Contact

$( document ).ready(function() {
  var contactBtn = document.getElementById('contactButton');
  var cntactHome = document.getElementById('contactHome');

  contactBtn.addEventListener('click', function() {
    $('.outer-container').addClass('blur');
    $('#contactFormSite').toggleClass('open');
  }, false);
  /*cntactHome.addEventListener('click', function() {
    $('#contactForm').toggleClass('open');
  }, false);*/
});


// Remove Open Class from Contact

$( document ).ready(function() {
  var closeBtn = document.getElementById('closeButton');

  closeBtn.addEventListener('click', function() {
    $('.outer-container').removeClass('blur');
    $('#contactFormSite').removeClass('in open');
  }, false);
  /*closeBtnHome.addEventListener('click', function() {
    $('.outer-container').removeClass('blur');
    $('#contactForm').removeClass('in open');
  }, false);*/
});

// Remove Open Class from Landing Contact

/*$( document ).ready(function() {
  var closeBtnHome = document.getElementById('closeButtonHome');
  
  closeBtnHome.addEventListener('click', function() {
    $('.outer-container').removeClass('blur');
    $('#contactForm').removeClass('in open');
  }, false);
});*/


// Navbar Toggle Animation


// Close Menu Button 

$(window).on('click', function() {
	$('#menu-toggle').removeClass('open');
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

    if (scroll > 300) {
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


