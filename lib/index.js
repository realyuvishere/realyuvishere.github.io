var vHeight = $(window).height(),
    vWidth = $(window).width(),
    cover = $('.full'),
    halfvh = vHeight/2,
    thirdvh = vHeight/3,
    halfvw = vWidth/2.5,
    quartvh = vHeight/4;
var bodies = ['#intro', '#about', '#work', '#con'];
var darkcolors = ['#1D1F1D', '#101A26', '#18272B', '#222222'];
var lightcolors = ['#ffffff', '#f2f2f2', '#f9f9f9', '#f5f5f5'];
window.onload = function(){
    $('.loader').addClass("none");
    $('.mainbod').removeClass("none");
    $('#question').modal('show');
};
setInterval(function(){
    $("#ldiv").css('background-color', '#111');
    $("#sdiv").css('background-color', '#fff');
    setTimeout(function(){
        $("#ldiv").css('background-color', '#f9f9f9');
        $("#sdiv").css('background-color', '#000');
    }, 2000)
}, 4000);
//$('.introheading').css({"padding-top": halfvh,});
//$('#ldiv').css({"padding-top": halfvh,});
//$('.lds-css').css({"padding-left": halfvw,});
cover.css({"min-height":vHeight,"max-width":vWidth,});
$("#thanks").css({"padding-top": thirdvh,});
$("#intro .row").css({"padding-top": quartvh/1.5,});
$("#navb").css({"max-width": vWidth,});

$(document).ready(function(){
    if($(window).width() < 1160) {
        $(".conlist").removeClass("d-flex");
        $(".conlist").removeClass("justify-content-around");
        $(".hmm").addClass("show");
        $(".imgcontain").addClass("show");
        $(".hmm2").addClass("show");
        $(".hmm1").addClass("show");
        $(".zoom").addClass("show");
    } else {
        $(".hmm").removeClass("show");
        $(".imgcontain").removeClass("show");
        $(".hmm2").removeClass("show");
        $(".hmm1").removeClass("show");
        $(".zoom").removeClass("show");
    }
});

function myFunction() {
    var ian = document.getElementById("ian");
    var wan = document.getElementById("wan");
    var can = document.getElementById("can");
    if (x.className === "ncl") {
        x.className += " responsive";
        $(".nul").removeClass("d-flex");
        $(".nul").removeClass("justify-content-around");
        ian.onclick = function(){
            x.className = "ncl";
            $(".nul").addClass("d-flex");
            $(".nul").addClass("justify-content-around");
        }
        wan.onclick = function(){
            x.className = "ncl";
            $(".nul").addClass("d-flex");
            $(".nul").addClass("justify-content-around");
        }
        can.onclick = function(){
            x.className = "ncl";
            $(".nul").addClass("d-flex");
            $(".nul").addClass("justify-content-around");
        }
        
    } else {
        x.className = "ncl";
        $(".nul").addClass("d-flex");
        $(".nul").addClass("justify-content-around");
    }
}

function thankredirect(){
    var i = 3;
    setInterval(function(){
        document.getElementById('cntdown').innerHTML = i;
        if(i > 0) {
            i--;
        };
    }, 1000);
};

function modetoggle(){
    var i = 0;
    if($('#intro').css({"background-color": '#1D1F1D',})) {
        $('body').removeClass('text-white');
        while(i < bodies.length) {
            $(bodies[i]).css({"background-color": lightcolors[i],});
            i++;
        }
    } else {
        $('body').addClass('text-white');
        while(i < bodies.length) {
            $(bodies[i]).css({"background-color": darkcolors[i],});
            i++;
        }
    }
};
function lightmode(){
    var i = 0;
    $('body').removeClass("text-white");
    while (i < bodies.length) {
        $(bodies[i]).css({"background-color": lightcolors[i],});
        i++;
    }
    $('#question').modal('hide');
};