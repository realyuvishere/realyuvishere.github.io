function trends() {
    var hide = document.getElementById('trendbod');
    var change = document.getElementById('fromr');
    if (hide.style.display === 'none') {
        hide.style.display = 'block';
        change.style.marginRight = '0.5%';
} else {
        hide.style.display = 'none';
        change.style.marginRight = '21.9%';
    }
}