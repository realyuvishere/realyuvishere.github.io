function clearEditor(){
    $('#output_OHTML .lead').find('p, h2, h3, h4, h5, h6').removeAttr("id");
    $('.mainConEditor').find('.form-control').removeAttr('id').attr('readonly', true);
}
function parseTime(x) {
    var d = new Date(x);
    var n = d.getDate();
    var m = d.getMonth() + 1;
    var y = d.getFullYear();
    var hour = d.getHours();
    var minute = d.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    var publishedOn = n + "/" + m + "/" + y + " " + hour + ":" + minute + " (UTC +5:30)";
    return publishedOn;
}
var selectedHtml = new Array(1);
$('#link_text').on('input', function(){
    $('.form-check').children('label').children('a').text($(this).val())
})
$('#link_url').on('input', function(){
    $('.form-check').children('label').children('a').attr('href', $(this).val())
});
$('.form-check').each(function(){
    var colorName = $(this).children('label').attr('for').replace('a_', '');
    $(this).children('label').children('a').addClass(colorName).attr('target', '_blank');
});
$('.form-check').children('input').on('input', function(){
    var appendingA = $(this).siblings('label').html();
    selectedHtml[0] = appendingA;
});
$('#link_collapse .card .btn-group button').on('click', function(){
    if($(this)[0] === $(this).parent().children()[0]){
        var inputVal = $('#currentParagraphEditor').val();
        inputVal += ' ' + selectedHtml[0];
        $('#currentParagraphEditor')[0].value = inputVal;
    } else {
        $('#output_OHTML .lead').append(selectedHtml[0]);
    }
})
$('#align_group').children('button').on('click', function(){
    var alignClass = $(this)[0].classList[2];
    $('#align_group').children('button').each(function(){
        var checkClass = $(this)[0].classList[2];
        if($('#currentPara').hasClass(checkClass)) {
            $('#currentPara').removeClass(checkClass);
        }
    })
    $('#currentPara').addClass(alignClass);
});
$('#headings_group').children('button').on('click',function(){
    var tagname = $(this)[0].id.replace('add_','');
    clearEditor();
    $('.mainConEditor').append('<textarea type="text" class="form-control mb-3" placeholder="Heading text" id="currentParagraphEditor" oninput="addParaContent()"></textarea>');
    $('#output_OHTML .lead').append('<' + tagname + ' class="pl-4 text-left m-2" id="currentPara"></' + tagname + '>');
    if (tagname === "h2") {
        $('#currentPara').css('border-left', '5px solid #333');
    } else {
        $('#currentPara').addClass('border-left border-dark');
    }
});
$('#html_container').css('height', $(window).height());
$("#document_title").on('input', function(){
    $("#title").text($(this).val())
});
$("#document_author").on('input', function(){
    $("#author").text(" - " + $(this).val())
});
function addParaContent(){
    var inputVal = document.getElementById('currentParagraphEditor').value;
    document.getElementById('currentPara').innerHTML = inputVal;
    this.onkeydown = function(key){
        if (key.key == "Enter" && key.code == "Enter") {
            inputVal += "<br>";
            document.getElementById('currentParagraphEditor').value = inputVal;
        }
    }
}
$('#html_output').on('click', function(){
    $("#html_container_modal").modal('show');
    $('#html_container').val($("#output_OHTML").html());
});
$('form').submit(function () {
    $('#html_container').val($("#output_OHTML").html());
});
$("#paste_image_changes").on('click', function(){
    $("#image_url").attr('value', window.localStorage.getItem('image_url'));
    $("#image_alt").attr('value', window.localStorage.getItem('image_alt'));
    $("#image_title").attr('value', window.localStorage.getItem('image_title'));
})
$('#save_image_changes').on('click', function(){
    $("#output_OHTML").find('img').attr('src', $("#image_url").val());
    $("#output_OHTML").find('img').attr('alt', $("#image_alt").val());
    $("#output_OHTML").find('img').attr('title', $("#image_title").val());
});
$('#new_para').on('click', function(){
    clearEditor();
    $('.mainConEditor').append('<textarea type="text" class="form-control mb-3" placeholder="Paragraph text" id="currentParagraphEditor" oninput="addParaContent()"></textarea>');
    $('#output_OHTML .lead').append('<p class="pl-2 text-left" id="currentPara"></p>');
});
$(document).ready(function(){
    var setName = Date.now();
    $('#document_name').attr('value', setName);
    $('.date').text('Published: ' + parseTime(setName));
});