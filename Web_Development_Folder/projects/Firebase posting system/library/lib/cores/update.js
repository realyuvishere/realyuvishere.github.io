//const authRoot = firebase.auth();

//const dbRoot = firebase.database();
//const storageRootRef = firebase.storage().ref();
const warningPop = document.getElementById('warning');
var userName, userMail, userPic, userFile, postLikes;
var likedBy = new Array();

function userTimeStamp(x) {
    var d = new Date(x);
    var n = d.getDate();
    var m = d.getMonth() + 1;
    var y = d.getFullYear();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var publishedOn = n + "/" + m + "/" + y + " (" + hour + ":" + minute + ":" + second + ")";
    return publishedOn;
}
if ($("#mainFeed").children().length == 0) {
    $("#mainFeed").html('<div class="jumbotron text-muted text-center"><i class="fa fa-bell-o"></i> Oops, seems like there are no papers to read right now, you can try and refresh the page, wait while we load the data or make one available by sending your own to our team for review.</div>')
}
authRoot.onAuthStateChanged(function (user) {
    if (user) {
        var feedDirectory = dbRoot.ref('latest/');
        feedDirectory.on('child_added', snap => {
            dbRoot.ref('users/' + snap.child('name').child("1").val() + '/' + snap.child("time").val()).update({
                status: snap.child("status").val()
            });
            if (snap.child("status").val() == "Disapproved") {
                dbRoot.ref('users/' + snap.child('name').child("1").val() + '/' + snap.child("time").val()).update({
                    comment: snap.child("comment").val(),
                    postkey: snap.key
                });
                //                } else if (snap.child("status").val() == "Approved"){
                //                    dbRoot.ref('users/' + snap.child('name').child("1").val() + '/' + snap.child("time").val()).update({likes: snap.child("likes").val()});
            };
            if (snap.child("status").val() == "Approved") {
                $("#mainFeed .jumbotron").css('display', 'none');
                $('#mainFeed').prepend('<div class="card mb-3 zoom"><div class="row no-gutters"><div class="col-4 p-md-3 d-flex align-items-center"><img src="' + snap.child("photo").val() + '" class="card-img rounded-circle" alt="User"></div><div class="col-8"><div class="card-body"><h5 class="card-title">' + snap.child("title").val() + '</h5><p class="card-text">' + snap.child("description").val() + '</p><p class="card-text"><button class="btn btn-block btn-outline-info" id="' + snap.key + '">View paper</button><br><p class="card-text"><small class="text-muted">' + userTimeStamp(snap.child("time").val()) + ' by ' + snap.child("name").child(0).val() + '</small></p></div></div></div></div>');
                //                    <button class="btn btn-lg btn-outline-like" id="like_' + snap.key + '"><i class="fa fa-thumbs-o-up"></i></button><span><span id="likesNum_' + snap.key + '"></span> Likes</span></p>
                //                    postLikes = snap.child("likes").val();
                //                    $("#likesNum_" + snap.key).text(postLikes);
                //                    $("#like_" + snap.key).on('click', function(){
                //                        $(this).toggleClass('liked');
                //                        $(this).children('i.fa').toggleClass('fa-thumbs-o-up').toggleClass("fa-thumbs-up");
                //                        if ($("#like_" + snap.key).hasClass('liked')) {
                //                            postLikes += 1;
                //                        } else {
                //                            postLikes -= 1;
                //                        }
                //                        feedDirectory.child(snap.key).update({likes: postLikes});
                //                    });
                $("#" + snap.key).on('click', function () {
                    $('#documentModal').modal('show');
                    $('#documentTitle').text(snap.child('title').val());
                    $("#documentModal").on('hide.bs.modal', function () {
                        $("#documentRender").empty();
                    });
                    var pdfjsLib = window['pdfjs-dist/build/pdf'];
                    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
                    var loadingPDFDoc = pdfjsLib.getDocument(snap.child('link').val());
                    loadingPDFDoc.promise.then(function (doc) {
                        for (var i = 1; i <= doc._pdfInfo.numPages; i++) {
                            $("#documentRender").append('<canvas id="' + i + '" style="display: none;"></canvas>');
                            canvas = document.getElementById(i);
                            renderPage(i, canvas);
                        };

                        function renderPage(pageNumber, canvas) {
                            doc.getPage(pageNumber).then(function (page) {
                                var viewport;
                                if ($(window).width() < 400) {
                                    viewport = page.getViewport({
                                        scale: .3
                                    });
                                } else if ($(window).width() < 600) {
                                    viewport = page.getViewport({
                                        scale: .5
                                    });
                                } else {
                                    viewport = page.getViewport({
                                        scale: 1
                                    });
                                }
                                canvas.height = viewport.height;
                                canvas.width = viewport.width;
                                var renderTask = page.render({
                                    canvasContext: canvas.getContext('2d'),
                                    viewport: viewport
                                });
                                renderTask.promise.then(function () {
                                    function watermarkedDataURL(canvas, text) {
                                        var tempCanvas = document.createElement('canvas');
                                        var tempCtx = tempCanvas.getContext('2d');
                                        var cw, ch;
                                        cw = tempCanvas.width = canvas.width;
                                        ch = tempCanvas.height = canvas.height;
                                        tempCtx.drawImage(canvas, 0, 0);
                                        tempCtx.font = "4rem verdana";
                                        var textWidth = tempCtx.measureText(text).width;
                                        tempCtx.globalAlpha = .15;
                                        tempCtx.fillStyle = 'black';
                                        tempCtx.rotate(-Math.atan(ch / cw));
                                        tempCtx.fillText(text, -(cw - textWidth) / 2, ch / 2);
                                        document.getElementById("documentRender").replaceChild(tempCanvas, canvas);
                                        return (tempCanvas.toDataURL());
                                    }
                                    var dataURL = watermarkedDataURL(canvas, "MASKO");
                                });
                            });
                        };
                    });
                });
            }
        });
        //            feedDirectory.on('child_changed', snap => {
        //                $("#likesNum_" + snap.key).text(snap.child("likes").val());
        //            });
    } else {
        notUser()
    }
})