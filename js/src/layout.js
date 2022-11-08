

// load creep.js
$(document).ready(function(){
	$("a").creep();
});


var wait_and_do = function( time, target ) {
	setTimeout( function(){
		$( target ).addClass( 'visible' );
	}, time );
};


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
		if ( scroll_position >= ( $( 'section.advocacy-federal' ).offset().top - 100 ) ) {

			$( 'section.advocacy-federal .arrow-container' ).addClass( 'visible' );
			wait_and_do( 200, '.advocacy-federal .icon-columns .icon-column:first-child' );
			wait_and_do( 400, '.advocacy-federal .icon-columns .icon-column:nth-child(2)' );
			wait_and_do( 600, '.advocacy-federal .icon-columns .icon-column:nth-child(3)' );
			wait_and_do( 800, '.advocacy-federal .icon-columns .icon-column:nth-child(4)' );
			wait_and_do( 1000, '.advocacy-federal .icon-columns .icon-column:nth-child(5)' );

		}

		// state advocacy animations
		if ( scroll_position >= ( $( 'section.advocacy-state' ).offset().top - 100 ) ) {
			$( 'section.advocacy-state .arrow-container' ).addClass( 'visible' );
			wait_and_do( 200, '.advocacy-state .state-box.az' );
			wait_and_do( 400, '.advocacy-state .state-box.co' );
			wait_and_do( 600, '.advocacy-state .state-box.id' );
			wait_and_do( 800, '.advocacy-state .state-box.or' );
			wait_and_do( 1000, '.advocacy-state .state-box.wa' );
			wait_and_do( 1200, '.advocacy-state .state-box.wy' );
		}

		// grassroots advocacy animations
		if ( scroll_position >= ( $( 'section.advocacy-grassroots' ).offset().top - 100 ) ) {
			$( 'section.advocacy-grassroots .arrow-container' ).addClass( 'visible' );
			$( 'section.advocacy-grassroots .section-content' ).addClass( 'visible' );
		}

		// regulatory advocacy animations
		if ( scroll_position >= ( $( 'section.advocacy-regulatory' ).offset().top - 100 ) ) {
			$( 'section.advocacy-regulatory .arrow-container' ).addClass( 'visible' );
			wait_and_do( 200, '.advocacy-regulatory .icon-columns .icon-column:first-child' );
			wait_and_do( 400, '.advocacy-regulatory .icon-columns .icon-column:nth-child(2)' );
			wait_and_do( 600, '.advocacy-regulatory .icon-columns .icon-column:nth-child(3)' );
			wait_and_do( 800, '.advocacy-regulatory .icon-columns .icon-column:nth-child(4)' );
			wait_and_do( 1000, '.advocacy-regulatory .icon-columns .icon-column:nth-child(5)' );
		}

		// cooperative values animations
		if ( scroll_position >= ( $( 'section.cooperative' ).offset().top - 100 ) ) {
			$( 'section.cooperative .arrow-container' ).addClass( 'visible' );
			$( 'section.cooperative .section-content' ).addClass( 'visible' );
		}

		// member animations
		if ( scroll_position >= ( $( 'section.member' ).offset().top - 100 ) ) {
			$( 'section.member .arrow-container' ).addClass( 'visible' );
			wait_and_do( 200, '.member .columns .column:first-child' );
			wait_and_do( 400, '.member .columns .column:nth-child(2)' );
			wait_and_do( 600, '.member .columns .column:nth-child(3)' );
			wait_and_do( 800, '.member .columns .column:nth-child(4)' );
			wait_and_do( 1000, '.member .columns .column:nth-child(5)' );
		}

		// solutions animations
		if ( scroll_position >= ( $( 'section.solutions' ).offset().top - 100 ) ) {
			$( 'section.solutions .arrow-container' ).addClass( 'visible' );
			wait_and_do( 200, '.solutions .stats .stat:first-child' );
			wait_and_do( 400, '.solutions .stats .stat:nth-child(2)' );
			wait_and_do( 600, '.solutions .stats .stat:nth-child(3)' );
			wait_and_do( 800, '.solutions .stats .stat:nth-child(4)' );
			wait_and_do( 1000, '.solutions .stats .stat:nth-child(5)' );
			wait_and_do( 1200, '.solutions .stats .stat:nth-child(6)' );
			wait_and_do( 1400, '.solutions .stats .stat:nth-child(7)' );
			wait_and_do( 1600, '.solutions .stats .stat:nth-child(8)' );
		}

		// community animations
		if ( scroll_position >= ( $( 'section.community' ).offset().top - 100 ) ) {
			$( 'section.community .arrow-container' ).addClass( 'visible' );
			$( 'section.community .section-content' ).addClass( 'visible' );
		}

		// solutions animations
		if ( scroll_position >= ( $( 'section.foundation' ).offset().top - 100 ) ) {
			// $( 'section.foundation .arrow-container' ).addClass( 'visible' );
		}

	});

});

