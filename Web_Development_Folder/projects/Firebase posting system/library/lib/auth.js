const authRoot = firebase.auth();
const dbRoot = firebase.database();
const storageRootRef = firebase.storage().ref();

function toThisPage(url) {
    if (window.location.href.search(url) > 0) {
        return true;
    } else {
        window.location = url;
    }
}

authRoot.onAuthStateChanged(function (user) {
    if (user) {
        toThisPage('index.html');
    } else {
        var isThere = toThisPage('auth.html');
        if (isThere) {
            const googleAuth = new firebase.auth.GoogleAuthProvider();
            const googleBtnRegis = document.getElementById('googlesignup');

            googleBtnRegis.addEventListener('click', e => {
                authRoot.signInWithPopup(googleAuth).then(function (result) {
                    if (result.credential) {
                        var token = result.credential.accessToken;
                    };
                }).catch(function (e) {
                    window.alert(e.message);
                });
            });
        }
    }
})