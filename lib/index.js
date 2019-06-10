var x = document.getElementById("navb");
$(document).ready(function() {
	$('#fullpage').fullpage({
        menu: '#navb',
        scrollOverflow: true,
        recordHistory: false,
        sectionsColor: ['#1D1F1D', '#101A26', '#18272B', '#222'],
        afterRender: function(){
            $(".loader").fadeOut("slow");
            setTimeout(function(){
                $(".mainbod").css('opacity', '1');
                $(".loader").addClass("none");
            }, 1000);
        },
        onLeave: function(origin, destination, direction){
            var loadedSection = this;
            if(origin.index == 0){
                $("#navb").removeClass("none");
                $(".hmm").addClass("totop");
                $(".imgcontain").addClass("tobottom");
                $(".hmm2").removeClass("none");
                $(".hmm1").removeClass("none");
                $(".hmm2").removeClass("totop");
                $(".hmm1").removeClass("tobottom");
                setTimeout(function(){
                    $(".hmm").addClass("none");
                    $(".imgcontain").addClass("none");
                }, 1000);
            } else if(destination.index == 0) {
                $("#navb").addClass("none");
                $(".hmm2").addClass("totop");
                $(".hmm1").addClass("tobottom");
                $(".hmm").removeClass("totop");
                $(".imgcontain").removeClass("tobottom");
                $(".hmm").removeClass("none");
                $(".imgcontain").removeClass("none");
                setTimeout(function(){
                    $(".hmm2").addClass("none");
                    $(".hmm1").addClass("none");
                }, 1000);
            } else if(destination.index == 1) {
                $(".hmm2").removeClass("none");
                $(".hmm1").removeClass("none");
                $(".hmm2").removeClass("totop");
                $(".hmm1").removeClass("tobottom");
            } else if(destination.index == 2) {
                $(".hmm2").addClass("totop");
                $(".hmm1").addClass("tobottom");
                setTimeout(function(){
                    $(".hmm2").addClass("none");
                    $(".hmm1").addClass("none");
                }, 1000);
            } else if(origin.index == 2 && destination.index == 1){
                $(".hmm2").removeClass("none");
                $(".hmm1").removeClass("none");
                $(".hmm2").removeClass("totop");
                $(".hmm1").removeClass("tobottom");
            }
        },
	});
});
$(document).ready(function(){
    if($(window).width() < 1000) {
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
setInterval(function(){
    $("#ldiv").css('background-color', '#111');
    $("#sdiv").css('background-color', '#fff');
    setTimeout(function(){
        $("#ldiv").css('background-color', '#f9f9f9');
        $("#sdiv").css('background-color', '#000');
    }, 2000)
}, 4000);
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