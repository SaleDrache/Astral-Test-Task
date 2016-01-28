$(document).ready(function () {

	function setActiveState (selected) {
		selected.addClass("active").parent().siblings().find("a").removeClass("active");
	}

	function changeNavTab (tab) {

	   var hash = tab.hash;
	   $(hash).show().siblings().hide();
	}
	
	$("nav").on("click","a", function() {
		setActiveState( $(this) );
		changeNavTab(this);
	});

	
});

