// Majority of code sourced from http://variart.io/pieces/litmus
// background (#F0E8E0)
var s = SVG('drawing');

// colors
var pinks   = ['#D07C96', '#DC0657', '#86104C'];
var reds    = ['#C41420', '#DE4A00', '#DA1C14'];
var greens  = ['#B9D55D', '#28A362', '#2B773B'];
var blues   = ['#2F99BB', '#33AB90', '#206691'];
var yellows = ['#E8BA00', '#E6E600', '#F0EB00'];

var leftMargin = 550;
var spaceBetween = 30;
var boxSize = 50;
var boxNum = 3;
var y = 90

function strip(x, ybase, numCells, width, colors){
  var lastColor, color;

  for(var i = 0; i < numCells; i++){
    // ensure we don't have the same color side-by-side
    while (color == null || color == lastColor){
      color = colors[Math.floor(Math.random() * 3)];
    }

    s.rect(width, width).attr({
      fill: color,
      x: x,
      y: getY(ybase, i, width)
    });
    lastColor = color;
  }
}

function getY(ybase, boxNum, boxSize) {
  return ybase + boxNum * boxSize;
}

// strips
strip((boxSize * 0) + leftMargin + (spaceBetween * 0), y, boxNum + 8, boxSize, pinks);
strip((boxSize * 1) + leftMargin + (spaceBetween * 1), y, boxNum + 4, boxSize, reds);
strip((boxSize * 2) + leftMargin + (spaceBetween * 2), y, boxNum, boxSize, greens);
strip((boxSize * 3) + leftMargin + (spaceBetween * 3), y, boxNum + 8, boxSize, blues);

// strip((boxSize * 0) + leftMargin + (spaceBetween * 0), getY(y, boxNum + 1, boxSize), boxNum, boxSize, pinks);
// strip((boxSize * 1) + leftMargin + (spaceBetween * 1), getY(y, boxNum + 1, boxSize), boxNum, boxSize, reds);
strip((boxSize * 2) + leftMargin + (spaceBetween * 2), getY(y, boxNum + 1, boxSize), boxNum + 4, boxSize, greens);
// strip((boxSize * 3) + leftMargin + (spaceBetween * 3), getY(y, boxNum + 1, boxSize), boxNum, boxSize, blues);

// strip((boxSize * 0) + leftMargin + (spaceBetween * 0), getY(y, boxNum + 5, boxSize), boxNum, boxSize, pinks);
strip((boxSize * 1) + leftMargin + (spaceBetween * 1), getY(y, boxNum + 5, boxSize), boxNum, boxSize, reds);
// strip((boxSize * 2) + leftMargin + (spaceBetween * 2), getY(y, boxNum + 5, boxSize), boxNum, boxSize, greens);
// strip((boxSize * 3) + leftMargin + (spaceBetween * 3), getY(y, boxNum + 5, boxSize), boxNum, boxSize, blues);

// strip((boxSize * 4) + leftMargin + (spaceBetween * 4), boxNum, boxSize, yellows);
