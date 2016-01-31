$(document).ready(function () {

	function setActiveState (selected) {
		selected.addClass("active").parent().siblings().find("a").removeClass("active");
	}

	function changeNavTab (tab) {

		var hash = tab.data("url");

		/* If browser width is bigger than for mobile screens (403px) */
		/* Then change tabs with slideUp/slideDown */
		if ( $(document).width() > 403 ) {
		   	$(hash).siblings().slideUp(800);
		   	$(hash).delay( 600 ).slideDown(800);

		/* If its mobile screen, then only scroll down to respective tab with smooth animation */
		} else {
		   	$('html, body').animate({
		       scrollTop: $(hash).offset().top
		     }, 1000, function(){

		       // when done, add hash to url
		       // (default click behaviour)
		       window.location.hash = hash;
		     });
		}

	}
	
	$("nav").on("click","a.tab", function() {
		setActiveState( $(this) );
		changeNavTab( $(this) );
	});

	
});

