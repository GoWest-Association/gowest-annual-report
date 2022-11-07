

// load creep.js
$(document).ready(function(){
	$("a").creep();
});


$(document).ready(function(){

	// show arrow in header after a timeout
	setTimeout(function(){

		// show header arrow onload
		$( 'header .arrow-container' ).addClass( 'visible' );

	}, 700 );


	// on scroll
	$(window).scroll(function() {
		var scroll_position = $(window).scrollTop();

		// federal advocacy animations
		if ( scroll_position >= $( 'section.advocacy-federal' ).offset().top ) {
			$( 'section.advocacy-federal .arrow-container' ).addClass( 'visible' );
		}
	});

});

