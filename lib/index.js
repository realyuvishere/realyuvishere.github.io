$(document).ready(function() {
	$('#fullpage').fullpage({
        menu: '#navb',
        scrollOverflow: true,
        recordHistory: false,
        sectionsColor: ['#000', '#111', '#222', '#333'],
        afterRender: function(){
            
        },
        onLeave: function(origin, destination, direction){
            var leavingSection = this;
            if(origin.index == 0){
                $(".navbar").removeClass("none");
            } else if(destination.index == 0) {
                $(".navbar").addClass("none");
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