// DIMENSION INDEX
var vHeight = $(window).height(),
    vWidth = $(window).width(),
    cover = $('.full'),
    halfvh = vHeight/2,
    thirdvh = vHeight/3,
    halfvw = vWidth/2.5;
// ENDS

var countDownDate = new Date("2020-02-15 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 31 * 12)) / (1000 * 60 * 60 * 24 * 31));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 31)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = months + " Months<br>" + days + " Days<br>" + hours + " Hours<br>" + minutes + " Minutes<br>and<br>" + seconds + " Seconds<br>before boards get you!";
    $("#timer").css('background-color', 'rgba(0, 0, 0, .3)');
    setTimeout(function(){
        $("#timer").css('background-color', 'rgba(0, 0, 0, .2)');
    }, 500)
    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);

$(".date").css({"min-height":vHeight,"max-width":vWidth,"padding-top": thirdvh,"padding-bottom": thirdvh,});

$(".colours").on('input', function(){
    var amount = $(".colours").val();
    $(".date").css({"background-color": amount,});
    if (amount > "#555555") {
        $("#cchange").removeClass("text-white");
        $(".text-muted").addClass("text-white").removeClass("text-muted");
    } else {
        $("#cchange").addClass("text-white");
        $(".text-muted").removeClass("text-white").addClass("text-muted");
    }
});

window.onscroll = function () {
    let heading = document.getElementById("cchange");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        heading.classList.add("scrolled");
    } else {
        heading.classList.remove("scrolled");
    }
};

$("#close").on('click', function(){
    $("#cchange").fadeOut("slow", function(){
        $(".options").css({"display": 'block'});
    });
});

$("#optshow").on('click', function(){
    $(".options").fadeOut("slow", function(){
        $("#cchange").fadeIn("slow");
    });
});