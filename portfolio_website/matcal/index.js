var vWidth = $(window).width(), vHeight = $(window).height(), thirdvh = vHeight/3, banner = $(".banner"), halfvh = vHeight/2, quartvh = vHeight/4;
banner.css({"max-width": vWidth, "height": quartvh,});
$("form").css({"min-height": vHeight,});

// Input init

var currentTextInput;
var puzzleArrayData;
function initializeScreen(){
	var puzzleTable = document.getElementById("puzzle");
	puzzleArrayData = preparepuzzleArray();
	for ( var i = 0; i < puzzleArrayData.length ; i++ ) {
		var row = puzzleTable.insertRow(-1);
		var rowData = puzzleArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
                var nameID = String(i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox form-control" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')" name="' + nameID + '">';
			}else{
				cell.style.backgroundColor  = "black";
			}
		}
	}
}
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
function preparepuzzleArray(){
var items = [	[0, 0, 'j', 0, 0, 0, 0, 'h', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             ['s', 'h', 'o', 'c', 'k', 'l', 'e', 'y', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 'n', 0, 0, 0, 0, 'd', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 'y', 0, 0, 0, 0, 'r', 0, 0, 0, 0, 'i', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 'i', 0, 0, 0, 'h', 'o', 'n', 'g', 'm', 'e', 'n', 'g', 'o', 's', 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 'v', 0, 0, 0, 0, 'g', 0, 0, 0, 0, 'f', 0, 0, 'o', 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 'e', 0, 0, 0, 0, 'e', 0, 0, 'w', 0, 'i', 0, 0, 'n', 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 'i', 'p', 'h', 'o', 'n', 'e', 0, 'a', 0, 'n', 0, 0, 'y', 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 'o', 0, 0, 'r', 0, 'i', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 'g', 'p', 's', 0, 0, 'n', 0, 't', 0, 'm', 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'e', 0, 'y', 0, 'a', 'p', 'o', 'l', 'l', 'o', '1', '1', 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0, 'w', 0, 'r', 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'b', 'l', 'a', 'c', 'k', 'p', 'a', 'n', 't', 'h', 'e', 'r', 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0, 'r', 0, 'z', 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 0, 0, 0, 'u', 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 'b', 'e', 'a', 't', 's', 0, 0, 0, 'c', 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 'b', 0, 0, 0, 0, 0, 0, 0, 'k', 0, 'l', 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 'k', 0, 0, 0, 's', 't', 'e', 'v', 'e', 'w', 'o', 'z', 'n', 'i', 'a', 'k', 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0, 'g', 0, 0, 0, 'p', 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'g', 0, 'a', 0, 0, 0, 'p', 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 't', 'i', 'm', 'b', 'e', 'r', 'n', 'e', 'r', 's', 'l', 'e', 'e', 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'p', 0, 0, 0, 'e', 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'a', 0, 'm', 'a', 'c', 'p', 'r', 'o'],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'u', 0, 0, 0, 'a', 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'l', 0, 0, 0, 'r', 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 'l', 'e', 'd', 0, 0, 0]
			];
return items;
}
console.log(preparepuzzleArray)