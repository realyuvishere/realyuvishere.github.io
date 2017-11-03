setTimeout(function () {
    $("div#animate").removeClass("hide").addClass("show");
}, 1000);

document.getElementById('kmore').onclick = function () {
	$("div#intro").addClass("fadeaway");
	
	setTimeout(function () {document.getElementById('intro').style.display = "none"; }, 1800);
	setTimeout(function () {document.getElementById('mainbod').style.display = "block"; }, 3000);
};