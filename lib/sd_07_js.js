$(document).ready(function() {
    $(window).scroll( function(){
        $('.bod').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('reveal');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('reveal');
            }
        });
    });
});

$(document).ready(function (){
    $(".goabout").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $(".goworks").click(function (){
        $('html, body').animate({
            scrollTop: $("#works").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $(".goachieve").click(function (){
        $('html, body').animate({
            scrollTop: $("#laurels").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $(".scrollup").click(function (){
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 2000);
    });
});
$(window).scroll(function() {
if ($(this).scrollTop() > 570){  
    $('.scrollup').addClass("block");
	$('.adiv').addClass("bod1");
	$('.mainnavscr').addClass("show");
  }
  else{
    $('.scrollup').removeClass("block");
	$('.adiv').removeClass("bod1");
	$('.mainnavscr').removeClass("show");
  }
});