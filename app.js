'use strict';

var collectionOfBusMall = [];
var selectorBox = document.getElementById('selectorBox');
function BusMallItem(image, name) {
  this.image = image;
  this.name = name;
  this.perClicks = 0;
  this.picShown = 0;

  this.displayItem = function() {
    var imageElement = document.createElement('img');
    imageElement.src = this.image;
    imageElement.alt = this.name;
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

for (var i = 0; i < collectionOfBusMall.length; i++) {
  collectionOfBusMall[i].displayItem();
}

function selectThree () {
  var selectThreeArray = [];
  while(selectThreeArray.length !== 3){
    var item = collectionOfBusMall[Math.floor(Math.random() * collectionOfBusMall.length)];
    console.log('here');
    selectThreeArray.push(item);
  }
  return selectThreeArray;
}














imgContainer.addEventListener('click', handleImageContainerClick);

var BusMallItem = document.getElementById('BusMallItem');
function displayList(){
  BusMallItem.innerHtml ='';
  for (var i = 0; i < collectionOfBusMall.length; i++){
    var liElement = document.createElement('li');
    var liElement2 = document.createElement('li');
    liElement.textContent = BusMallItem[i].name + 'has been clicked' + BusMallItem[i].clicks + ' times';
    liElement2.textContent = BusMallItem[i].name + 'has been clicked' + BusMallItem[i].clicks + ' times';
    BusMallItem.appendChild(liElement2);
}

// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

var test = selectThree();
console.log(test);
