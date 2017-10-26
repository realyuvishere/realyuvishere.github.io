function stopaud(){
        var aud = document.getElementById('audio');
        if (aud.playing){
            aud.pause();
        } else {
            aud.pause()
        }
    }
function playaud(){
        var aud = document.getElementById('audio');
        var vid = document.getElementById('video');
        var vid2 = document.getElementById('video2');
        if (aud.paused){
            aud.play();
            vid.pause();
            vid2.pause();
        } else {
            aud.play();
            aud.currentTime = 0;
            vid.pause();
            vid2.pause();
        }
    }
function hidintro(){
        var hide = document.getElementById('intro');
        var show = document.getElementById('body');
        var bg = document.getElementById('bg');
        hide.style.display = "none";
        show.style.display = "block";
        bg.style.background = "none";
        document.title = "The Unveiled Divination | Simulated Reality";
    }
$(window).scroll(function() {
if ($(this).scrollTop() > 420){  
    $('.mainhead').addClass("mainheadscrolled");
  }
  else{
    $('.mainhead').removeClass("mainheadscrolled");
  }
});
$(window).scroll(function() {
if ($(this).scrollTop() > 60){  
    $('#conhead1').addClass("headscrolled");
  }
  else{
    $('#conhead1').removeClass("headscrolled");
  }
});
$(window).scroll(function() {
if ($(this).scrollTop() > 1490){  
    $('#conhead2').addClass("headscrolled");
  }
  else{
    $('#conhead2').removeClass("headscrolled");
  }
});
$(window).scroll(function() {
if ($(this).scrollTop() > 2970){  
    $('#conhead3').addClass("headscrolled");
  }
  else{
    $('#conhead3').removeClass("headscrolled");
  }
});