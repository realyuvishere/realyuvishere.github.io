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
setTimeout(function () {
	document.title = "Yuvraj Sharma";
}, 1000);
function snackbar() {
	if($('html, body').offset("#works")) {
		$("#snackbar1").addClass("reveal");
	var s1 = document.getElementById('snackbar1');
    setTimeout(function(){ s1.className = s1.className.replace("show", ""); }, 3000);
	}else if($('html, body').offset("#about")) {
		$("#snackbar2").addClass("reveal");
	var s2 = document.getElementById('snackbar2');
    setTimeout(function(){ s2.className = s2.className.replace("show", ""); }, 3000);
	}else{
		$("#snackbar3").addClass("reveal");
	var s3 = document.getElementById('snackbar3');
    setTimeout(function(){ s3.className = s3.className.replace("show", ""); }, 3000);
	}
}