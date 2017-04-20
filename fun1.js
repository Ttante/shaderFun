// get canvas and context
var canvas1 = document.getElementById("ex01");
var canvas2 = document.getElementById("ex02");
var canvas3 = document.getElementById("ex03");
var context1 = canvas1.getContext("2d");
var context2 = canvas2.getContext("2d");
var context3 = canvas3.getContext("2d");

canvas2.style.position = "absolute";
canvas2.style.top = "450px";
canvas2.style.left = "0";

canvas3.style.position = "absolute";
canvas3.style.top = "0";
canvas3.style.left = "650px";



// fill
context1.beginPath();
context1.rect(0, 0, canvas1.width, canvas1.height);


var colors = ["#302572", "#a3f343", "#3435af", "#34ac34", "#121098", "#bac232", "#acaa12", "#bbbaaa", "#999999", "#bbbbbb"];

function randomColor () {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// canvas 1
context1.fillStyle = randomColor();
context1.fill();

// canvas 2
context2.lineWidth = 35;
context2.strokeStyle = randomColor();

context2.beginPath();
context2.moveTo(canvas2.width/2, 0);
context2.lineTo(canvas2.width/2, canvas2.height);
context2.stroke();

context2.beginPath();
context2.moveTo(0, canvas2.height/2);
context2.lineTo(canvas2.width, canvas2.height/2);
context2.stroke();


var imageData = context3.createImageData(canvas3.width, canvas3.height);
for (var i = 0; i < imageData.data.length; i += 1) {
    imageData.data[i] = Math.random() * 255;
}
context3.putImageData(imageData, 0, 0); //  0, 0 is the offset to start putting the imageDate into the actual canvas. I won't use any other values for that in this article..