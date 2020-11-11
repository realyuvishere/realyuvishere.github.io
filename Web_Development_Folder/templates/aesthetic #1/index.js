window.onload = function(){
    $(".lds-ellipsis").fadeOut("slow");
    $(".loader").addClass("uprise");
    setTimeout(function(){
        $(".mainbod").removeClass("hide");
        $(".loader").addClass("hide");
    }, 1000);
};

// height - width index

var vHeight = $(window).height(), vWidth = $(window).width(), cover = $('.full'), halfvh = vHeight/2, thirdvh = vHeight/3, halfvw = vWidth/2.5;
$('.introheading').css({"padding-top": halfvh,});
$('#ldiv').css({"padding-top": halfvh,});
$('.lds-css').css({"padding-left": halfvw,});
$("#timer").css({"width": vWidth/2});
cover.css({"min-height":vHeight,"max-width":vWidth,});
$(document).ready(function(){
    if($(window).width() < 1000) {
        $("#timer").css({"width": "100%"});
        $(".nav").addClass("flex-column");
        $(".date").removeClass("text-right");
        $(".date").addClass("text-center");
    }
});
/// intro animations
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        var i = $(window).scrollTop();
        if(i<=600){
            $(".introheading").css({"transform": "translateY("+ i/2 +"px)", "opacity": 1 - i/1000});
        } else {
            $(".introheading").css({"transform": "translateY(600px)", "opacity": 1-i});
        }
    })
});
// smooth scroll
$(document).ready(function (){
    $(".navbtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });
});
$(document).ready(function (){
    $(".ferrybtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });
});
$('.nav-link').each(function(){
    $(this).click(function(){
        $(this).tab("show");
        $('html, body').delay(400).animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    })
});
// countdown 
var countDownDate = new Date("Jun 30, 2020 17:00:00");
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 31)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    $("#timer").css('background-color', 'rgba(0, 0, 0, .3)');
    setTimeout(function(){
        $("#timer").css('background-color', 'rgba(0, 0, 0, .2)');
    }, 500)
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Let's Roll ;)";
    }
}, 1000);