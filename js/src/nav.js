$(document).ready(function() {

    $('header .column-boxes .column-box').each(function(i) {

        // get the box
        var box = $(this);

        // animate the boxes in the header onload
        setTimeout(function() {
            box.addClass('visible');
        }, 200 * i);

        // bind an onclick event to the box to scroll to the anchor
        box.click(function() {
            var anchor = box.data('anchor');
            console.log(anchor);
            var target = $('section.' + anchor);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

    });
});