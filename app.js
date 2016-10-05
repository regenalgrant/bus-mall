'use strict';

var collectionOfBusMall = [];
var selectorBox = document.getElementById('selectorBox');
function BusMallItem(image, imageName) {
  this.image = image;
  this.imageName = imageName;
  this.countClicks = 0;
  this.clickedImage = 0;

  this.displayItem = function() {
    var imageElement = document.createElement('image');
    imageElement.src = this.image;
    imageElement.alt = this.imageName;
    selectorBox.appendChild(imageElement);
  };

  collectionOfBusMall.push(this);
}

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

//-----------------------------
var selectorBox = document.getElementById('images');
selectorBox.addEventListener('click', clickHandler);

function selectThree () {
  var selectThreeArray = [];
  while(selectThreeArray.length !== 3){
    var random = collectionOfBusMall[Math.floor(Math.random() * collectionOfBusMall.length)];
    console.log('here');
    selectThreeArray.push(random);
  }
 return selectThreeArray;
 }
function clickHandler(images) {
	  console.log(images.target);
	  var matchPath = images.target.getAttribute('BusMallItem');
	  var selectThreeArray = randomN();
	  console.log(matchPath);
	  for(var i = 0; i < currentImageStruct.length; i++) {
	    var currentIndex = currentImageStruct[i];
	    var displayedObject = images[currentIndex];
	    displayedObject.views += 1;
	  }
//-------------------------------------------------

	  for (var i = 0; i < images.length; i++) {
	    var currentImageObject = images[i];
	    console.log('Images', i, images[i]);
	    if (currentImageObject.path === matchPath) {
	      console.log('found it!1', currentImageObject);
	      currentImageObject.clicks += 1;
	    };
    }
    currentImageStruct = selectThreeArray;
    imageList.textContent = '';
    drawImage(selectThreeArray[0]);
    drawImage(selectThreeArray[1]);
    drawImage(selectThreeArray[2]);
    console.log(images);
  };
}
  function randomN() {
    var firstRandomIndex = Math.floor(Math.random() * images.length);
    var secondRandomIndex = Math.floor(Math.random() * images.length);
    while(firstRandomIndex === secondRandomIndex) {
      secondRandomIndex = Math.floor(Math.random() * images.length);
    }
    var thirdRandomIndex = Math.floor(Math.random() * images.length);
    while(thirdRandomIndex === firstRandomIndex
        || thirdRandomIndex === secondRandomIndex) {
      thirdRandomIndex = Math.floor(Math.random() * images.length);
    }
    return [firstRandomIndex, secondRandomIndex, thirdRandomIndex];
  }
  function drawImage(index) {

    var img = document.createElement('img');
    var li = document.createElement('li');
    var imageList = document.getElementById('images');
    var randomPath = images[index].path;

    img.setAttribute('src', randomPath);

    li.appendChild(img);
    imageList.appendChild(li);
  }

  function Image(name, path) {
    this.views = 0;
    this.clicks = 0;
    this.name = name;
    this.path = 'imgs/' + path;
    images.push(this);
  }
  var ctx = document.getElementById('chart_canvas');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [images[0].path, images[1].path, images[2].path],
      datasets: [{
        data: [images[0].clicks, images[1].clicks, images[2].clicks]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });



















var test = selectThree();
console.log(test);
