// Majority of code sourced from http://variart.io/pieces/litmus
// background (#F0E8E0)
var width = '100px';
var height = '100px';

var s = SVG('drawing');

// colors
var pinks   = ['#D07C96', '#DC0657', '#86104C'];
var reds    = ['#C41420', '#DE4A00', '#DA1C14'];
var greens  = ['#B9D55D', '#28A362', '#2B773B'];
var blues   = ['#2F99BB', '#33AB90', '#206691'];
var yellows = ['#E8BA00', '#E6E600', '#F0EB00'];

var leftMargin = 100;
var spaceBetween = 25;
var boxSize = 50;

function strip(x, numCells, width, colors){
  var lastColor, color;

  for(var i = 0; i < numCells; i++){
    // ensure we don't have the same color side-by-side
    while (color == null || color == lastColor){
      color = colors[Math.floor(Math.random() * 3)];
    }

    s.rect(width, width).attr({
      fill: color,
      x: x,
      y: 90 + i * width
    });
    lastColor = color;
  }
}

// strips
strip((boxSize * 0) + leftMargin + (spaceBetween * 0), 8, boxSize, pinks);
strip((boxSize * 1) + leftMargin + (spaceBetween * 1), 8, boxSize, reds);
strip((boxSize * 2) + leftMargin + (spaceBetween * 2), 8, boxSize, greens);
strip((boxSize * 3) + leftMargin + (spaceBetween * 3), 8, boxSize, blues);
strip((boxSize * 4) + leftMargin + (spaceBetween * 4), 8, boxSize, yellows);
