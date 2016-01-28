$(document).ready(function () {

	function setActiveState (selected) {
		selected.addClass("active").parent().siblings().find("a").removeClass("active");
	}
	
	$("nav").on("click","a", function() {
		setActiveState( $(this) );
	});
	
});

