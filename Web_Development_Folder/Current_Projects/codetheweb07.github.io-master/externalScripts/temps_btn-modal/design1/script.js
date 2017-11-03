// Virus Modal
var virusmodal = document.getElementById('virusModal');

var btn = document.getElementById("virusbtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    virusmodal.style.display = "block";
}

span.onclick = function() {
    virusmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == virusmodal) {
        virusmodal.style.display = "none";
    }
}
 
// Spam Modal 

var spammodal = document.getElementById('spamModal');

var btn2 = document.getElementById("spambtn");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    spammodal.style.display = "block";
}

span2.onclick = function() {
    spammodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == spammodal) {
        spammodal.style.display = "none";
    }
}

// Phishing Modal 

var phishmodal = document.getElementById('phishingModal');

var btn3 = document.getElementById("phishbtn");

var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
    phishmodal.style.display = "block";
}

span3.onclick = function() {
    phishmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == phishmodal) {
        phishmodal.style.display = "none";
    }
}

// Trojan Modal 

var trojanmodal = document.getElementById('trojanModal');

var btn4 = document.getElementById("trojanbtn");

var span4 = document.getElementsByClassName("close4")[0];

btn4.onclick = function() {
    trojanmodal.style.display = "block";
}

span4.onclick = function() {
    trojanmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == trojanmodal) {
        trojanmodal.style.display = "none";
    }
}

// Spy Modal 

var spymodal = document.getElementById('spyModal');

var btn5 = document.getElementById("spybtn");

var span5 = document.getElementsByClassName("close5")[0];

btn5.onclick = function() {
    spymodal.style.display = "block";
}

span5.onclick = function() {
    spymodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == spymodal) {
        spymodal.style.display = "none";
    }
}

// Froad Modal 

var fmodal = document.getElementById('froadModal');

var btn6 = document.getElementById("froadbtn");

var span6 = document.getElementsByClassName("close6")[0];

btn6.onclick = function() {
    fmodal.style.display = "block";
}

span6.onclick = function() {
    fmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == fmodal) {
        fmodal.style.display = "none";
    }
}

// *******  Keeping Safe Modal   *******

var kmodal = document.getElementById('safe');

var button = document.getElementById("some");

var span7 = document.getElementsByClassName("close7")[0];

button.onclick = function() {
    kmodal.style.display = "block";
}

span7.onclick = function() {
    kmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == kmodal) {
        kmodal.style.display = "none";
    }
}

// Submit 
var myVar;

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function myFunction(name)
{
myVar = setTimeout(showPage, 2000);
document.getElementById("changeThis").style.display = "none";
document.getElementById("loader").style.display = "block";
document.getElementById("mydiv").style.height = '160px';
}

 var input = document.getElementById("myName").value;
