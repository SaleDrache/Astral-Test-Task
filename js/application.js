$(document).ready(function () {

	function setActiveState (selected) {
		selected.addClass("active").parent().siblings().find("a").removeClass("active");
	}

	function changeNavTab (tab) {

	   var hash = tab.hash;
	   $(hash).siblings().slideUp(800);
	   $(hash).delay( 600 ).slideDown(800);
	}
	
	$("nav").on("click","a", function() {
		setActiveState( $(this) );
		changeNavTab(this);
	});

	
});

