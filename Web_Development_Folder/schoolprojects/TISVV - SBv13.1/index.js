setTimeout(function () {
	document.title = "Google Presents";
}, 1000);
setTimeout(function () {
	document.title = "Pixel 2";
}, 2000);
setTimeout(function () {
	$(".lwhite").removeClass("lwhite");
	$(".intro").css('background-color', '#fff')
}, 1100);
setTimeout(function () {
	$(".logo").addClass("lfade");
}, 2000);
setTimeout(function () {
	$("body").css('overflow', 'auto');
	$(".intro").addClass("hide");
}, 3500);
setTimeout(function () {
	$(".mainbod").removeClass("hide");
}, 3900);

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
    $("a.spec").click(function (){
        $('html, body').animate({
            scrollTop: $("#spec").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.why").click(function (){
        $('html, body').animate({
            scrollTop: $("#why").offset().top
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
    if( $(this).scrollTop() >= $('#ban1').position().top ){
        $(".nav").css('background-color', '#3496db');
        $(".nav a").css('color', '#fff');
		$(".bod2").addClass("fadein");
    } else {
		$(".bod2").removeClass("fadein");
	}
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#ban2').position().top ){
        $(".nav").css('background-color', '#27ae60');
        $(".nav a").css('color', '#fff');
		$(".bod3").addClass("fadein");
		$(".bod3").addClass("opaque");
    } else {
		$(".bod3").removeClass("fadein");
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

function aniclo(){
	var btn = document.getElementById("close1");
	var mod = document.getElementById("modal1");
	$('.int1').addClass("goabove");
    setTimeout(function () {mod.style.display = "none"; }, 800);
	setTimeout(function () {$('.int1').removeClass("goabove"); }, 1000);
}
function aniclo2(){
	var btn = document.getElementById("close2");
	var mod = document.getElementById("modal2");
	$('.int2').addClass("goabove");
    setTimeout(function () {mod.style.display = "none"; }, 800);
	setTimeout(function () {$('.int2').removeClass("goabove"); }, 1000);
}
function aniclo3(){
	var btn = document.getElementById("close3");
	var mod = document.getElementById("modal3");
	$('.int3').addClass("goabove");
    setTimeout(function () {mod.style.display = "none"; }, 800);
	setTimeout(function () {$('.int3').removeClass("goabove"); }, 1000);
}
function aniclo4(){
	var btn = document.getElementById("close4");
	var mod = document.getElementById("modal4");
	$('.int4').addClass("goabove");
    setTimeout(function () {mod.style.display = "none"; }, 800);
	setTimeout(function () {$('.int4').removeClass("goabove"); }, 1000);
}
function aniclo5(){
	var btn = document.getElementById("close5");
	var mod = document.getElementById("modal5");
	$('.int5').addClass("goabove");
    setTimeout(function () {mod.style.display = "none"; }, 800);
	setTimeout(function () {$('.int5').removeClass("goabove"); }, 1000);
}
function aniclo6(){
	var btn = document.getElementById("close6");
	var mod = document.getElementById("modal6");
	$('.int6').addClass("goabove");
    setTimeout(function () {mod.style.display = "none"; }, 800);
	setTimeout(function () {$('.int6').removeClass("goabove"); }, 1000);
}

window.onclick = function(event) {
	var mod1 = document.getElementById("modal1");
	var mod2 = document.getElementById("modal2");
	var mod3 = document.getElementById("modal3");
	var mod4 = document.getElementById("modal4");
	var mod5 = document.getElementById("modal5");
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