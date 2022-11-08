

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
		if ( scroll_position >= ( $( 'section.advocacy-federal' ).offset().top - 10 ) ) {
			$( 'section.advocacy-federal .arrow-container' ).addClass( 'visible' );
		}

		// state advocacy animations
		if ( scroll_position >= ( $( 'section.advocacy-state' ).offset().top - 10 ) ) {
			$( 'section.advocacy-state .arrow-container' ).addClass( 'visible' );
		}

		// grassroots advocacy animations
		if ( scroll_position >= ( $( 'section.advocacy-grassroots' ).offset().top - 10 ) ) {
			$( 'section.advocacy-grassroots .arrow-container' ).addClass( 'visible' );
		}

		// regulatory advocacy animations
		if ( scroll_position >= ( $( 'section.advocacy-regulatory' ).offset().top - 10 ) ) {
			$( 'section.advocacy-regulatory .arrow-container' ).addClass( 'visible' );
		}

		// cooperative values animations
		if ( scroll_position >= ( $( 'section.cooperative' ).offset().top - 10 ) ) {
			$( 'section.cooperative .arrow-container' ).addClass( 'visible' );
		}

		// member animations
		if ( scroll_position >= ( $( 'section.member' ).offset().top - 10 ) ) {
			$( 'section.member .arrow-container' ).addClass( 'visible' );
		}

	});

});

