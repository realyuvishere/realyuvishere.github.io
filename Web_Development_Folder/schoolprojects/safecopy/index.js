$(document).ready(function() {
	$('#fullpage').fullpage({
        scrollOverflow: true,
        recordHistory: false,
        autoScrolling: false,
        sectionsColor: ['#000'],
        afterRender: function(){
            $(".lds-css").fadeOut("slow");
            $('.intro').delay(1000).fadeOut("slow");
            setTimeout(function(){
                $(".mainbod").css('opacity', '1');
                $(".intro").addClass("none");
            }, 2000);
        },
	});
});
$(document).ready(function(){
    if($(window).width() < 1000) {
    }
});


// smooth  scroll 

$(document).ready(function (){
    $(".navbtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});