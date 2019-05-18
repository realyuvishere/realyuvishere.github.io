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
            var leavingSection = this;
            if(origin.index == 0){
                $("#navb").removeClass("none");
            } else if(destination.index == 0) {
                $("#navb").addClass("none");
            }
        },
	});
});
$(document).ready(function(){
    if($(window).width() < 1000) {
        $(".conlist").removeClass("d-flex");
        $(".conlist").removeClass("justify-content-around");
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
    if (x.className === "ncl") {
        x.className += " responsive";
        $(".nul").removeClass("d-flex");
        $(".nul").removeClass("justify-content-around");
        ian.onclick = function(){
            x.className = "ncl";
        }
    } else {
        x.className = "ncl";
        $(".nul").addClass("d-flex");
        $(".nul").addClass("justify-content-around");
    }
}