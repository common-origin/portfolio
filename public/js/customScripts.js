$( document ).ready(function() {
    var menuBtn = document.getElementById('menuButton');
    var menuListItem = document.getElementById('menuItem');

	menuBtn.addEventListener('click', function() {
	    $('.outer-container').toggleClass('blur');
	}, false),

	menuListItem.addEventListener('click', function() {
		$('.outer-container').removeClass('blur');
	}, false);

});