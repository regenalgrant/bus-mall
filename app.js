'use strict';

var collectionOfBusMall = [];
// var selectorBox = document.getElementById('selectorBox');
var images = document.getElementById('images');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var counter = 0;
var leftPic;
var centerPic;
var rightPic;
var oldLeft;
var oldCenter;
var oldRight;

// Consrtuctor Function
function BusMallItem(image, imageName) {
  this.image = image;
  this.imageName = imageName;
  this.countClicks = 0;
  this.shownImage = 0;
  collectionOfBusMall.push(this);
}

// Create Objects Function
function makeImgObj() {
  new BusMallItem('images/bag.jpg', 'bag');
  new BusMallItem('images/banana.jpg', 'banana');
  new BusMallItem('images/bathroom.jpg','bathroom');
  new BusMallItem('images/boots.jpg', 'boots');
  new BusMallItem('images/breakfast.jpg', 'breakfast');
  new BusMallItem('images/bubblegum.jpg', 'bubblegum');
  new BusMallItem('images/chair.jpg', 'chair');
  new BusMallItem('images/cthulhu.jpg', 'cthulhu');
  new BusMallItem('images/dog-duck.jpg', 'dog-duck');
  new BusMallItem('images/dragon.jpg','dragon');
  new BusMallItem('images/pen.jpg','pen');
  new BusMallItem('images/pet-sweep.jpg','pet-sweep');
  new BusMallItem('images/scissors.jpg','scissors');
  new BusMallItem('images/shark.jpg', 'shark');
  new BusMallItem('images/sweep.png','sweep');
  new BusMallItem('images/tauntaun.jpg','tauntaun');
  new BusMallItem('images/unicorn.jpg','unicorn');
  new BusMallItem('images/usb.gif','usb');
  new BusMallItem('images/water-can.jpg','water-can');
  new BusMallItem('images/wine-glass.jpg','wine-glass');
  console.log(collectionOfBusMall);
}
makeImgObj();

// random img generator for left, center, right
function rollDice() {
  if (counter >= 25) {
    alert('25 Rolls.');
    images.removeEventListener('click', clickHandler);
    updateArrays();
    paintChart();
    return;
  } else {
    hideChart();
    leftPic = Math.floor(Math.random() * collectionOfBusMall.length);
    centerPic = Math.floor(Math.random() * collectionOfBusMall.length);
    rightPic = Math.floor(Math.random() * collectionOfBusMall.length);
  }
  // validate unique numbers
  if (leftPic === centerPic || leftPic === rightPic || centerPic === rightPic || leftPic === oldLeft || leftPic === oldCenter || leftPic === oldRight || centerPic === oldLeft || centerPic === oldCenter || centerPic === oldRight || rightPic === oldLeft || rightPic === oldCenter || rightPic === oldRight) {
    rollDice();
  } else {
    // console.log(leftPic);
    // console.log(centerPic);
    // console.log(rightPic);
  // write the image to the html page
    left.src = collectionOfBusMall[leftPic].image;
    center.src = collectionOfBusMall[centerPic].image;
    right.src = collectionOfBusMall[rightPic].image;
    oldLeft = leftPic;
    oldCenter = centerPic;
    oldRight = rightPic;
    collectionOfBusMall[leftPic].shownImage += 1;
    collectionOfBusMall[centerPic].shownImage += 1;
    collectionOfBusMall[rightPic].shownImage += 1;
  }
}
rollDice();

// Event Handler
function clickHandler(event) {
	// console.log(images.target);
  if (event.target.id === 'left') {
    collectionOfBusMall[leftPic].countClicks += 1;
    counter += 1;
    console.log(counter);
    rollDice();
  }
  if (event.target.id === 'center') {
    collectionOfBusMall[centerPic].countClicks += 1;
    counter += 1;
    console.log(counter);
    rollDice();
  }
  if (event.target.id === 'right') {
    collectionOfBusMall[rightPic].countClicks += 1;
    counter += 1;
    console.log(counter);
    rollDice();
  }
  if (event.target.id === 'images') {
    alert('You need to click on an image!');
    rollDice();
  }
}

function hideChart() {
  document.getElementById('chart_canvas').hidden = true;
}

function updateArrays() {
  for (var i = 0; i < collectionOfBusMall.length; i++) {
    iName[i] = collectionOfBusMall[i].image;
    iClicks[i] = collectionOfBusMall[i].countClicks;
  }
}

var data = {
  labels: iName,
  datasets: [
    {
      label: 'You Picked',
      data: iClicks,
      backgroundColor: [
        'rgb(0,0,0)',
        'rgb(0,0,128)',
        'rgb(0,0,255)',
        'rgb(0,128,0)',
        'rgb(0,128,128)',
        'rgb(0,255,0)',
        'rgb(0,255,255)',
        'rgb(128,0,0)',
        'rgb(128,0,128)',
        'rgb(128,128,0)',
        'rgb(128,128,128)',
        'rgb(192,192,192)',
        'rgb(255,0,0)',
        'rgb(255,0,255)',
        'rgb(255,255,0)',
        'rgb(215, 44, 122)',
        'rgb(84, 44, 122)',
        'rgb(84, 137, 122)',
        'rgb(208, 137, 122)',
        'rgb(208, 137, 28)',
      ]
    }]
};

function paintChart() {
  var ctx = document.getElementById('chart_canvas').getContext('2d');
  new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            beginAtZero:true
          }
        }]
      }
    }
  });
}


images.addEventListener('click', clickHandler);
