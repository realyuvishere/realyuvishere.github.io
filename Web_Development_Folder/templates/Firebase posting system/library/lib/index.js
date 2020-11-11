var vHeight = $(window).height(), vWidth = $(window).width(), cover = $('.full'), halfvh = vHeight/2, thirdvh = vHeight/3, halfvw = vWidth/2.5;
cover.css({"min-height":vHeight,"max-width":vWidth,});
document.documentElement.style.setProperty('--navbar-height', $('nav').height() + 16 + "px");
if ($(window).width() < 550) {
    $("nav div.d-flex").removeClass("justify-content-center");
}
function closeUsernav(){
    $('.usernav').addClass('fadeout');
    setTimeout(function(){
        $('.usernav').removeClass('show');
        $('.usernav').removeClass('fadeout');
        $('body').css('overflow', 'auto');
    }, 800);
};
function notUser(){
    $('#paper, #userprofile').remove();
    $('#papera, #userpa').addClass('disabled');
}
$('.nav-link').each(function(){
    $(this).click(function(){
        $(this).tab("show");
        closeUsernav();
        if ($('html').scrollTop() != 0){
            $('html, body').delay(400).animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1000);
        }
    })
});
$(document).ready(function(){
	$('a[role="tab"]').on('show.bs.tab', function(e) {
		localStorage.setItem('activeTab', $(e.target).attr('href'));
	});
	var activeTab = localStorage.getItem('activeTab');
	if(activeTab){
		$('.nav-pills a[href="' + activeTab + '"]').tab('show');
	}
    var themeConfig = window.localStorage.getItem('theme');
    function toggleVal(){
        $('body').toggleClass('bg-dark text-white');
        $('#themetoggle').text('Dark Theme');
        $('.navbar').toggleClass('navbar-dark');
        $('.usernav').toggleClass('bg-dark');
        $('.modal-content').toggleClass('bg-dark');
        $('.btn.btn-outline-dark').toggleClass('btn-outline-light');
        $('a.text-dark').toggleClass('text-white-50');
        if($('body').hasClass('bg-dark')) {
            $('#themetoggle').text('Light Theme');
            $('.btn.btn-outline-dark').addClass('btn-outline-light').removeClass('btn-outline-dark');
            $('.btn.btn-outline-primary').addClass('btn-primary').removeClass('btn-outline-primary');
            $('.btn.btn-outline-warning').addClass('btn-warning').removeClass('btn-outline-warning');
            $('.btn.btn-outline-danger').addClass('btn-danger').removeClass('btn-outline-danger');
        } else {
            $('.btn.btn-outline-light').addClass('btn-outline-dark').removeClass('btn-outline-light');
            $('.btn.btn-primary').addClass('btn-outline-primary').removeClass('btn-primary');
            $('.btn.btn-danger').addClass('btn-outline-danger').removeClass('btn-danger');
            $('.btn.btn-warning').addClass('btn-outline-warning').removeClass('btn-warning');
        }
    }
    if (themeConfig) {
        toggleVal();
    }
    $('#themetoggle').on('click', function(){
        toggleVal();
        window.localStorage.setItem('theme', 'true');
        if(themeConfig) {
            window.localStorage.clear();
        }
    });
});
//$('#passtoggle').on('click', function(){
//    $('input[type="password"]').attr('type') ? 
//    $('input[type="password').removeAttr('type') : $('input[type="password').attr('type', 'password');
//});
$('.navbar-toggle').on('click', function(){
    $('.usernav').addClass('show');
    $('body').css('overflow', 'hidden');
});
$('.closebtn').on('click', function(){
    closeUsernav();
});
var copyrightYear = new Date().getFullYear();
$('footer div.text-center').append('<i class="fa fa-copyright"></i>'+ copyrightYear +' MASKO');