/* smooth scrolling */
$(document).ready(function (){
    $("a.home").click(function (){
        $('html, body').animate({
            scrollTop: $(".hom").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.intro").click(function (){
        $('html, body').animate({
            scrollTop: $("#ban1").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $(".scrolldn").click(function (){
        $('html, body').animate({
            scrollTop: $(".hom").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.sec1").click(function (){
        $('html, body').animate({
            scrollTop: $("#sec1").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.sec2").click(function (){
        $('html, body').animate({
            scrollTop: $("#sec2").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.sec3").click(function (){
        $('html, body').animate({
            scrollTop: $("#sec3").offset().top
        }, 2000);
    });
});
/* something happens when page is scrolled */
$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $('.mainnav').addClass("scrhead");
  } else {
    $('.mainnav').removeClass("scrhead");
  }
});
/* modal trigger */
document.getElementById("btn1").onclick = function() {
	document.getElementById("modal1").style.display = "block";
};
document.getElementById("btn2").onclick = function() {
	document.getElementById("modal2").style.display = "block";
}
document.getElementById("btn3").onclick = function() {
	document.getElementById("modal3").style.display = "block";
}
/* animated closing of modals */
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
/* When user clicks elsewhere of the modal */
window.onclick = function(event) {
	var mod1 = document.getElementById("modal1");
	var mod2 = document.getElementById("modal2");
	var mod3 = document.getElementById("modal3");
    if (event.target == mod1) {
        aniclo();
    } else if (event.target == mod2) {
        aniclo2();
    } else if (event.target == mod3) {
        aniclo3();
    }
};
/* responsive nav */
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "mainnav") {
        x.className += " responsive";
    } else {
        x.className = "mainnav";
    }
}