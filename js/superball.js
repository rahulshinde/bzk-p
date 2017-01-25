/*[*] SCRIPT: Bouncing Image Script COPYRIGHT: (c) 1999 Hass
[*] AUTHOR: Lloyd Hassell EMAIL: lloydhass@hotmail.com
[*] WWW: http://go.to/hass
[*] Permission granted to Dynamicdrive.com to feature script in archive
[*] Modified by Dynamicdrive.com for feature alteration
[*] For this and 100's more DHTML scripts, visit http://dynamicdrive.com
*/

//Configure the below three variables (BallSpeed from 1 to 50, larger is faster)
var ballWidth = 40;
var ballHeight = 40;
var BallSpeed = 8;
var stopafter=0; //set time in seconds before ball disappears. Use 0 for never

var maxBallSpeed = 50;
var xMax;
var yMax;
var xPos = 0;
var yPos = 0;
var xDir = 'right';
var yDir = 'down';
var superballRunning = true;
var tempBallSpeed;
var currentBallSrc;
var newXDir;
var newYDir;

function stopit(){
clearTimeout(doit)
if (document.getElementById)
document.getElementById("superball").style.visibility="hidden"
else if (document.all)
document.all("superball").style.visibility = "hidden";
else
document.layers["superball"].visibility = "hide";
}

function initializeBall() {
if (document.all) {
xMax = document.body.clientWidth
yMax = document.body.clientHeight
document.all("superball").style.visibility = "visible";
}
else if (document.layers||document.getElementById) {
xMax = window.innerWidth-14;
yMax = window.innerHeight;
if (document.getElementById)
document.getElementById("superball").style.visibility="visible"
else
document.layers["superball"].visibility = "show";
}
setTimeout('moveBall()',400);
if (stopafter>0)
setTimeout("stopit()",stopafter*1000)
}


function moveBall() {
if (superballRunning == true) {
calculatePosition();
if (document.all) {
document.all("superball").style.left = xPos + document.body.scrollLeft;
document.all("superball").style.top = yPos + document.body.scrollTop;
}
else if (document.layers) {
document.layers["superball"].left = xPos + pageXOffset;
document.layers["superball"].top = yPos + pageYOffset;
}
else if (document.getElementById) {
document.getElementById("superball").style.left = xPos + pageXOffset;
document.getElementById("superball").style.top = yPos + pageYOffset;
}
doit=setTimeout('moveBall()',30);
}
}

function calculatePosition() {
if (xDir == "right") {
if (xPos > (xMax - ballWidth - BallSpeed)) { 
xDir = "left";
}
}
else if (xDir == "left") {
if (xPos < (0 + BallSpeed)) {
xDir = "right";
}
}
if (yDir == "down") {
if (yPos > (yMax - ballHeight - BallSpeed)) {
yDir = "up";
}
}
else if (yDir == "up") {
if (yPos < (0 + BallSpeed)) {
yDir = "down";
}
}
if (xDir == "right") {
xPos = xPos + BallSpeed;
}
else if (xDir == "left") {
xPos = xPos - BallSpeed;
}
else {
xPos = xPos;
}
if (yDir == "down") {
yPos = yPos + BallSpeed;
}
else if (yDir == "up") {
yPos = yPos - BallSpeed;
}
else {
yPos = yPos;
}
}

if (document.all||document.layers||document.getElementById){
window.onload = initializeBall;
window.onresize = new Function("window.location.reload()");
}

$(document).ready( function(){
})