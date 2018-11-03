//Loader
$(window).load(function(){
  $('.loader').fadeOut("slow");
  $('.loader-div').delay(1000).fadeOut("slow");
});

//Smooth Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//ToolTips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

//Collapse Button Changing
$(document).ready(function(){

  $("#collapse-btn").click(function(){

    if($("#navicon").hasClass("fa-bars")){
      $("#navicon").removeClass("fa-bars");
      $("#navicon").addClass("fa-times");
    }
    else if($("#navicon").hasClass("fa-times")){
      $("#navicon").removeClass("fa-times");
      $("#navicon").addClass("fa-bars");
    }

  });

});