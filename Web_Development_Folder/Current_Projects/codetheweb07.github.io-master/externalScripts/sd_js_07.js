var feedmod = document.getElementById('outterFrame');
document.getElementById('feedbackbtn').onclick = function() {
    if(feedmod.style.display === "block"){
        document.title = "overCode | Feedback";
    }else{
        document.title = "overCode | Home";
    }
};
function hide() {
    var btn = document.getElementById("introbtn");
    var intro = document.getElementById("intro");
    var main = document.getElementById("bod");
    intro.style.display = "none";
    main.style.display = "block";
    if (main.style.display === "block") {
    document.title = "overCode | Home";
    } else {
        document.title = "overCode";
    }
};
$(window).scroll(function() {
if ($(this).scrollTop() > 400){  
    $('#pgHead').addClass("scrolledpgHead");
    $('#pgHead').addClass("blue");
  }
  else{
    $('#pgHead').removeClass("scrolledpgHead");
    $('#pgHead').removeClass("blue");
  }
});
$(window).scroll(function(){
if ($(this).scrollTop() > 60){
    $('.TempDesign').addClass("display");
  }
});
$(window).scroll(function(){
if ($(this).scrollTop() > 1500){
    $('.Feedback').addClass("display");
  }
});
$(window).scroll(function(){
if($(this).scrollTop() > 900){
    $('.Queries').addClass("display");
  }
});
$(window).scroll(function() {
if ($(this).scrollTop() > 1000){  
    $('#pgHead').addClass("teal");
    $('#pgHead').removeClass("blue");
  }
  else{
    $('#pgHead').removeClass("teal");
  }
});
    $(window).scroll(function() {
if ($(this).scrollTop() > 1600){  
    $('#pgHead').addClass("yellow");
    $('#pgHead').removeClass("blue");
    $('#pgHead').removeClass("teal");
  }
  else{
    $('#pgHead').removeClass("yellow");
  }
});
function showdiv(){
    var list = document.getElementById('buttonslist');
    list.style.display = "block";
};
$(document).ready(function(){
    $("#showdiv1").click(function() {
        $("#buttonslist").slideToggle("slow");
    });
});
