setTimeout(function () {
	$("#2").removeClass("hide");
}, 1100);
setTimeout(function () {
	$(".lwhite").removeClass("lwhite");
	$(".intro").css('background-color', '#fff')
}, 2100);
setTimeout(function () {
	$(".logo").addClass("lfade");
}, 3100);
setTimeout(function () {
	$("body").removeClass("noscroll");
	$(".intro").addClass("hide");
}, 4500);
setTimeout(function () {
	$(".mainbod").removeClass("hide");
}, 4900);

function respnav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
$(document).ready(function (){
    $("a.hom").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.abo").click(function (){
        $('html, body').animate({
            scrollTop: $("#abo").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.rel").click(function (){
        $('html, body').animate({
            scrollTop: $("#rel").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.con").click(function (){
        $('html, body').animate({
            scrollTop: $("#con").offset().top
        }, 2000);
    });
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#home').position().top ){
        $(".nav").css('background-color', '#fff');
        $(".nav a").css('color', '#333');
    }
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#abo').position().top ){
        $(".nav").css('background-color', '#43a3d4');
        $(".nav a").css('color', '#fff');
		$(".bod2").addClass("fadein");
    }  else {
		$(".bod2").removeClass("fadein");
	}
});

document.getElementById("btn1").onclick = function() {
	document.getElementById("modal1").style.display = "block";
};
document.getElementById("btn2").onclick = function() {
	document.getElementById("modal2").style.display = "block";
}
document.getElementById("btn3").onclick = function() {
	document.getElementById("modal3").style.display = "block";
}
document.getElementById("btn4").onclick = function() {
	document.getElementById("modal4").style.display = "block";
}
document.getElementById("btn5").onclick = function() {
	document.getElementById("modal5").style.display = "block";
}
document.getElementById("btn6").onclick = function() {
	document.getElementById("modal6").style.display = "block";
}

function aniclo6(){
	var btn = document.getElementById("close6");
	var mod = document.getElementById("modal6");
	$('.int6').addClass("goabove");
    setTimeout(function () {mod.style.display = "none"; }, 800);
	setTimeout(function () {$('.int6').removeClass("goabove"); }, 1000);
}

window.onclick = function(event) {
	var mod6 = document.getElementById("modal6");
    if (event.target == mod1) {
        aniclo();
    } else if (event.target == mod2) {
        aniclo2();
    } else if (event.target == mod3) {
        aniclo3();
    } else if (event.target == mod4) {
        aniclo4();
    } else if (event.target == mod5) {
        aniclo5();
    } else if (event.target == mod6) {
        aniclo6();
    }
};