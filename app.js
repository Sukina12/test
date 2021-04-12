'use strict';
let restoreValue=null;
let names=[
  'jordanriver',
  'kingtalaldom',
  'wadihidan',
  'wadiibnhammad2',
  'wadimujib',
  'wadirumnight'
];
let imageSection = document.getElementById('image-section');
let leftImage = document.getElementById('left-image');
let middleImage = document.getElementById('middle-image');
let rightImage = document.getElementById('right-image');
function getRandomNumber(min,max){
  return Math.floor (Math.random() * (max - min) ) + min;
}
function Places(name){
  this.name = name;
  this.path = `./images/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  getFromLocalStorage();
  if (restoreValue === null){
    Places.all.push(this);
  }
}
Places.all =[];
for (let i=0; i<names.length; i++){
  new Places (names[i]);
}
storeInLocalStorage();

function storeInLocalStorage(){
  localStorage.setItem('places',JSON.stringify(Places.all));
}
function getFromLocalStorage(){
  restoreValue = localStorage.getItem ('places');
  let normalObjects = JSON.parse(restoreValue);
  if(restoreValue !== null){
    Places.all = normalObjects;
  }
}
let leftIndex ;
let middleIndex ;
let rightIndex ;
function render(){
  leftIndex = getRandomNumber (0,names.length);
  middleIndex = getRandomNumber (0,names.length);
  rightIndex = getRandomNumber (0,names.length);

  if (leftIndex === rightIndex || leftIndex === middleIndex || middleIndex === rightIndex){
    render();
  }
  leftImage.src = Places.all[leftIndex].path ;
  leftImage.alt = Places.all[leftIndex].name;
  Places.all[leftIndex].views++;
  middleImage.src = Places.all[middleIndex].path ;
  middleImage.alt = Places.all[middleIndex].name;
  Places.all[middleIndex].views++;
  rightImage.src = Places.all[rightIndex].path ;
  rightImage.alt = Places.all[rightIndex].name;
  Places.all[rightIndex].views++;
  storeInLocalStorage();
}
render();

imageSection.addEventListener('click',handelClick);
function handelClick (event){
  event.preventDefault();
  if (event.target.id !== 'image-section'){
    if (event.target.id === leftImage.id)
      Places.all[leftIndex].votes++;
    if (event.target.id === middleImage.id)
      Places.all[middleIndex].votes++;
    if (event.target.id === rightImage.id)
      Places.all[rightIndex].votes++;

  }
  storeInLocalStorage();
}
