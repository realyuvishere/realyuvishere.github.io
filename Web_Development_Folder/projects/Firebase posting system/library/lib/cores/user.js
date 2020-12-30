//const authRoot = firebase.auth();
//const dbRoot = firebase.database();
//const storageRootRef = firebase.storage().ref();
//const warningPop = document.getElementById('warning');

const logOutBtn = $('#logOut');
const editChangesBtn = $('#editChanges');
const deleteAccountBtn = $('#deleteAccount');
const publishBtn = $('#publish');
//var userName, userMail, userPic, userFile;
//function userTimeStamp(x) {
//    var d = new Date(x);
//    var n = d.getDate();
//    var m = d.getMonth() + 1;
//    var y = d.getFullYear();
//    var hour = d.getHours();
//    var minute = d.getMinutes();
//    var second = d.getSeconds();
//    var publishedOn = n + "/" + m + "/" + y + " (" + hour + ":" + minute + ":" + second + ")";
//    return publishedOn;
//}

authRoot.onAuthStateChanged(function (user) {
    if (user) {
        userName = user.displayName;
        userMail = user.email;
        userPic = user.photoURL;
        userID = user.uid;
        $('.card-img-top').attr('src', userPic);
        $('.card-img-top').attr('alt', userPic);
        $('.username').attr('value', userName);
        $('#nameDisplay').attr('value', userName);
        $('.useremail').attr('value', "<" + userMail + ">");
        var usersWork = dbRoot.ref('users/').child(userID);
        usersWork.on('child_added', snap => {
            if (snap.child("status").val() == "Pending") {
                $('.userWorkRow').append('<div class="col-md-5 m-1 zoom"><a href="' + snap.child("link").val() + '" class="btn-outline-info card userLink" target="_blank"><div class="card-body"><i class="fa fa-file-pdf-o pb-3"></i><h5 class="card-title">' + snap.child("title").val() + '</h5><div class="card-text">' + userTimeStamp(new Number(snap.key)) + '<br>Status: ' + snap.child("status").val() + '</div></div></a></div>');
            } else if (snap.child("status").val() == "Disapproved") {
                $('.userWorkRow').append('<div class="col-md-5 m-1 zoom"><a class="btn-outline-danger card userLink" target="_blank"><div class="card-body"><i class="fa fa-file-pdf-o pb-3"></i><h5 class="card-title">' + snap.child("title").val() + '</h5><div class="card-text">' + userTimeStamp(new Number(snap.key)) + '<br>Status: ' + snap.child("status").val() + '<br>Comment: ' + snap.child("comment").val() + '<button class="btn btn-secondary mt-3" id="delete_' + snap.key + '"><i class="fa fa-trash"></i> Delete post</button></div></div></a></div>');
                $("#delete_" + snap.key).on('click', function () {
                    dbRoot.ref("latest/" + snap.child("postkey").val()).remove();
                    usersWork.child(snap.key).remove();
                    storageRootRef.child("files/" + snap.child("filename").val()).delete();
                    $(this).parents('div.col-md-5').remove();

                })
            } else if (snap.child("status").val() == "Approved") {
                $('.userWorkRow').append('<div class="col-md-5 m-1 zoom"><a href="' + snap.child("link").val() + '" class="btn-outline-success card userLink" target="_blank"><div class="card-body"><i class="fa fa-file-pdf-o pb-3"></i><h5 class="card-title">' + snap.child("title").val() + '</h5><div class="card-text">' + userTimeStamp(new Number(snap.key)) + '<br>Status: ' + snap.child("status").val() + '<br>Likes: <span>' + snap.child("likes").val() + '</span></div></div></a></div>');
            }
        });
        usersWork.on('child_removed', snap => {
            snap.remove();
        });
        if (userName == null) {
            $('.username').addClass('form-control');
            $('.username').prop('readonly', false);
            $('#nameDisplay').prop('readonly', false);
            editChangesBtn.on('click', function () {
                user.updateProfile({
                    displayName: $('.username').val(),
                }).then(function () {
                    window.location.reload();
                }).catch(function (e) {
                    warningPop.innerHTML = e.message;
                    if (e.message != '') {
                        warningPop.classList.add('show');
                        warningPop.classList.add('fixed-bottom');
                    } else {
                        warningPop.classList.remove('show');
                        warningPop.classList.remove('fixed-bottom');
                    }
                });
            });
        };
        if (userPic == null) {
            user.updateProfile({
                photoURL: "./lib/user.png",
            }).then().catch(function (e) {
                warningPop.innerHTML = e.message;
                if (e.message != '') {
                    warningPop.classList.add('show');
                    warningPop.classList.add('fixed-bottom');
                } else {
                    warningPop.classList.remove('show');
                    warningPop.classList.remove('fixed-bottom');
                }
            });
        };
        logOutBtn.on('click', function () {
            authRoot.signOut().then(function () {
                window.location.replace('../index.html')
            }).catch(function (e) {
                warningPop.innerHTML = e.message;
                if (e.message != '') {
                    warningPop.classList.add('show');
                    warningPop.classList.add('fixed-bottom');
                } else {
                    warningPop.classList.remove('show');
                    warningPop.classList.remove('fixed-bottom');
                }
            });
        });
        deleteAccountBtn.on('click', function () {
            $("#deleteAccountModal").modal('show');
            $("#confirmDelete").on('input', function () {
                if ($(this).prop('checked', true)) {
                    $("#deleteAccountModal .btn-outline-danger").prop('disabled', false);
                }
                $("#deleteAccountModal .btn-outline-danger").on('click', function () {
                    //                        dbRoot.ref('users/' + userID).remove(); // Remove the user's data stored in DB
                    user.delete().then(function () {
                        window.location.replace('../index.html')
                    }).catch(function (e) {
                        warningPop.innerHTML = e.message;
                        if (e.message != '') {
                            warningPop.classList.add('show');
                            warningPop.classList.add('fixed-bottom');
                        } else {
                            warningPop.classList.remove('show');
                            warningPop.classList.remove('fixed-bottom');
                        }
                    });
                });
            });
        });
        publishBtn.on('click', function () {
            $('#loadingModal').modal('show');
            userFile = document.getElementById('fileUpload').files[0];
            var uploadUserFile = storageRootRef.child('files/' + userFile.name).put(userFile);
            uploadUserFile.on('state_changed', function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                $('.progress-bar').css({
                    "width": progress + "%",
                });
                if (progress == 100) {
                    $('.progress-bar').addClass('bg-success').removeClass('bg-info');
                    $('.spinner-border').removeClass('show');
                    $('#uploadAlert').text('Your file has been uploaded!');
                    $('#uploadAlert').addClass('alert-success show');
                }
                $('#loadingModal').on('hide.bs.modal', function () {
                    $('.progress-bar').removeClass('bg-success').addClass('bg-info');
                    $('#uploadAlert').removeClass('alert-success show');
                    $('.spinner-border').addClass('show');
                });
            }, function (error) {
                $('#uploadAlert').text(error.message);
                $('#uploadAlert').addClass('alert-danger show');
            }, function () {
                uploadUserFile.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    const postDate = Date.now();
                    const newPostKey = dbRoot.ref('latest/').push().key;
                    const userUpdate = {
                        title: $('#titleDisplay').val(),
                        link: downloadURL,
                        status: 'Pending',
                        filename: userFile.name,
                    };
                    const postUpdate = {
                        name: [$('#nameDisplay').val(), userID],
                        title: $('#titleDisplay').val(),
                        description: $('#summaryDisplay').val(),
                        photo: userPic,
                        link: downloadURL,
                        time: postDate,
                        status: "Pending",
                    };
                    dbRoot.ref('users/' + userID + "/" + postDate).set(userUpdate);
                    dbRoot.ref('latest/' + newPostKey).set(postUpdate);
                });
            });
        });
    } else {
        notUser()
    };
});
authRoot.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function () {}).catch(function (e) {
    warningPop.innerHTML = e.message;
    if (e.message != '') {
        warningPop.classList.add('show');
        warningPop.classList.add('fixed-bottom');
    } else {
        warningPop.classList.remove('show');
        warningPop.classList.remove('fixed-bottom');
    }
});