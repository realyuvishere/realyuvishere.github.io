function hidecon() {
var show = document.getElementById('contact');
var home = document.getElementById('home');
var menu = document.getElementById('menui');
var hide = document.getElementById('contact');
var nav = document.getElementById('nav');
if (hide.style.display === 'none'){
        hide.style.display = 'block';
        show.style.display = 'block';
        home.style.display = 'none';
        menu.style.color = '#000';
        nav.style.display = 'none';
} else {
        hide.style.display = 'none';
        show.style.display = 'none';
        home.style.display = 'block';
        menu.style.color = '#fff';
    }
}
function hideaga() {
var show = document.getElementById('contact');
var home = document.getElementById('home');
var menu = document.getElementById('menui');
var hide = document.getElementById('contact');
var nav = document.getElementById('nav');
if (hide.style.display === 'block') {
        hide.style.display = 'none';
        show.style.display = 'none';
        home.style.display = 'block';
} else {
        window.alert('You are already on this page!');
    }
}