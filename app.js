var mobileToggle = document.getElementById('mobile-nav-toggle');

mobileToggle.addEventListener("click", function(event) {
	event.preventDefault();
	if ( document.body.classList.contains('mobile-nav-open') ) {
		document.body.classList.remove('mobile-nav-open');
	} else {
		document.body.classList.add('mobile-nav-open');
	}
});
