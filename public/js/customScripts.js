// Add class to <body> for each page

$( document ).ready(function() {
  var newClass = window.location.href;
  newClass = newClass.substring(newClass.lastIndexOf('http://localhost:3000')+22, 26);
  $('body').addClass(newClass);
});

// Mobile Toggle Button add classes

$( document ).ready(function() {
  var menuBtn = document.getElementById('menuButton');
  var menuListItem = document.getElementById('menuItem');

  menuBtn.addEventListener('click', function() {
    $('#coverLayer').toggleClass('open')
    $('#mobile-menu').toggleClass('open');
  }, false);
});


// Add Open Class to  Home Contact

$( document ).ready(function() {
  var contactBtn = document.getElementById('contactButton');
  var cntactHome = document.getElementById('contactHome');

  contactBtn.addEventListener('click', function() {
    $('#coverLayer').addClass('open')
    $('#contactFormSite').toggleClass('open');
  }, false);

  /*cntactHome.addEventListener('click', function() {
    $('#contactForm').toggleClass('open');
  }, false);*/
});


// Remove Open Class from Contact #Mobile

$( document ).ready(function() {
  var closeBtn = document.getElementById('closeButton');

  if ($(window).width() >= 768) { 
    closeBtn.addEventListener('click', function() {
      $('#coverLayer').removeClass('open')
      $('#contactFormSite').removeClass('in open');
    }, false);
  } else {
    closeBtn.addEventListener('click', function() {
      $('#contactFormSite').removeClass('in open');
    });
  }
  /*closeBtnHome.addEventListener('click', function() {
    $('.outer-container').removeClass('blur');
    $('#contactForm').removeClass('in open');
  }, false);*/
});


// Close Menu Button 

$( document ).ready(function() {
  var menuBtn = document.getElementById('menuButton');

  menuBtn.addEventListener('click', function() {
    if ( $('#coverLayer').hasClass('open') ) {
      $('.outer-container').removeClass('open')
    }
  });
});


// Navbar Scroll 

$( document ).ready(function() {
  //caches a jQuery object containing the header element
  var header = $(".navbar-default");
  var pageHead = $(".page-nav-cont");
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
      sidebar.addClass("scrolled");
      pagination.addClass("scrolled");
    } else {
      pageHead.removeClass("scrolled");
      sidebar.removeClass("scrolled");
      pagination.removeClass("scrolled");
    }
    if ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 500 ){
      sidebar.removeClass("scrolled");
    }
  });
});


// Page Loader 
$(window).on("load", function() {
  $("#se-pre-con").removeClass("loading-screen");
});

$( document ).ready(function() {
  $('.nav-item').click( function() {
      $("#se-pre-con").addClass("loading-screen");
  });
}); 



//-----------------//

// Back top top button 

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("topBtn").style.bottom = "1em";
    } else {
      document.getElementById("topBtn").style.bottom = "-4em";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
