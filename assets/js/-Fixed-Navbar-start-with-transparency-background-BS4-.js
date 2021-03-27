$(document).ready(function(){
    var stoptransparency = 0; // when to stop the transparent menu
    var hidingmenu = 550; // when to hide the menu
    var lastScrollTop = 0, delta = 5;
    $(this).scrollTop(0);
	$(window).on('scroll load resize', function() {
		var position = $(this).scrollTop();
		// if(position > stoptransparency) {
		// 	$('#transmenu').removeClass('transparency');
		// } else {
		// 	$('#transmenu').addClass('transparency');
		// }
        if(Math.abs(lastScrollTop - position) <= delta)
            return;
        if (position > hidingmenu){
            $('#transmenu').fadeOut(300);
        } else {
            $('#transmenu').fadeIn(300);
        }
        lastScrollTop = position;  
	});
    
    $('#transmenu .dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('#transmenu .dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
});