setTimeout(function () {
    $("div#animate").removeClass("hide").addClass("show");
}, 1000);

document.getElementById('kmore').onclick = function () {
	$("div#intro").addClass("fadeaway");
	$("body").removeClass("bodybg");
	setTimeout(function () {document.getElementById('intro').style.display = "none"; }, 1800);
	setTimeout(function () {document.getElementById('mainbod').style.display = "block"; }, 3000);
};
$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $('#mainheader').addClass("scrhead");
	$('.mainnav').addClass("show");
  } else {
    $('#mainheader').removeClass("scrhead");
	$('.mainnav').removeClass("show")
  }
});
function divtoggle(){
	var personal = document.getElementById('pcards');
	var forte = document.getElementById('fcards');
	var button = document.getElementById('togglebtn');
	if (personal.style.display === "none"){
		personal.style.display = "block";
		forte.style.display = "none";
		button.innerHTML = "View Forte based data";
	} else {
		personal.style.display = "none";
		forte.style.display = "block";
		button.innerHTML = "View Personnel based data";
	}
}