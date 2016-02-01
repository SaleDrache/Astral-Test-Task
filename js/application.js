$(document).ready(function () {

	var validateData = {
		rules:
		{
			fullname:
			{
				required:true
			},
			email:
			{
				required:true,
				email:true
			},
			subject:
			{
				required:true
			},
			message:
			{
				required:true
			}
		},
		messages:
		{
			fullname:
			{
				required: "Please provide your name here"
			},
			email:
			{
				required:"Please enter your email address",
				email:"Please enter a valid email address"
			},
			subject:
			{
				required:"Please enter the subject"
			},
			message:
			{
				required:"Message field can't be empty"
			}
		}
	}

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

	function showSmallPhoto () {
		if ( $(document).width() > 768 ) {
			( $(this) ).find(".zoom").fadeIn("fast");
		}
	}
	function hideSmallPhoto () {
		if ( $(document).width() > 768 ) {
			( $(this) ).find(".zoom").fadeOut("fast");
		}
	}
	function showBigPhoto () {
		var photoSrc = $(this).closest(".photoList").find("img").attr("src");
		$(".zoomedInPhoto").fadeOut("normal", function(){
			$(".zoomedInPhoto").find("img").attr("src", photoSrc );
			$(".zoomedInPhoto").fadeIn("normal");
		});
	}
	function hideBigPhoto (time) {
		time = time || 0;
		$(".zoomedInPhoto").delay( time ).slideUp("slow");
	}


	/* CODE */

	/* scroll down to respective tab for mobiles or change tab for other screen sizes */
	$("nav").on("click","a.tab", function() {
		
		if (!$(this).hasClass("active")) {	/* hiding big photo when we change tab */
			hideBigPhoto(1000);				/* but leaves it if we click again on the same tab*/
		}									/* needs to stand before setActiveState*/

		setActiveState( $(this) );
		changeNavTab( $(this) );
	});

	$("#home").on("click",".goToWork", function() {
		changeNavTab( $(".work") );
		setActiveState( $(".work") );
	});

	/* Zoom-in and zoom-out photos */
	$(".photo").hover( showSmallPhoto, hideSmallPhoto );
	$(".photoList").on("click", ".zoom", showBigPhoto);
	$(".zoomedInPhoto").on("click", ".zoom", hideBigPhoto);

	/* Validate contact form */
	$(".form-horizontal").validate(validateData);

	/*Check to see if it is a mobile screen and the window is on top, if not then display button*/
	$(window).scroll(function(){
		if ( ($(this).scrollTop() > 400) && ( $(document).width() <= 403) ) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	/*Click event to scroll to top*/
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});



	
});

