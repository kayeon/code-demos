
// 4. fill our array with objects, and calling our DOM-writing function

var appendRows = document.getElementById('append-rows');
var animals = [];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Animal(name, min, max){
  this.name = name;
  this.populationArray = [];
  for(var i = 0; i < 3; i++) {
    this.populationArray.push(getRandomIntInclusive(min, max));
  }
}

function makeAnimalRow(animal){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = animal.name;
  tr.appendChild(th);
  for (var i = 0; i < animal.populationArray.length; i++){
    var td = document.createElement('td');
    td.textContent = animal.populationArray[i];
    tr.appendChild(td);
  }
  appendRows.appendChild(tr);
}

animals.push(new Animal('Impala', 25, 67));
animals.push(new Animal('Wildebeest', 100,2000));
animals.push(new Animal('T-Rex', 244, 246));

for (var i = 0; i < animals.length; i++){
  makeAnimalRow(animals[i]);
}


function newAnimal(){
  var newAnimalName = prompt('what kind of animal u want?');
  var newAnimalMin = prompt('what is the fewest');
  var newAnimalMax = prompt('what is the mostest');
  var newFrigginAnimal = new Animal(newAnimalName, newAnimalMin, newAnimalMax);
  makeAnimalRow(newFrigginAnimal);
}















// var appendRows = document.getElementById('append-rows');
// var brands = [];
//
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function BrandData(name, min, max){
//   this.name = name;
//   this.salesArray = [];
//   for(var i = 0; i < 3; i++) {
//     this.salesArray.push(getRandomIntInclusive(min, max));
//   }
// }
//
// function makeBrandRows(brand){
//   var tr = document.createElement('tr');
//   var th = document.createElement('th');
//   th.textContent = brand.name;
//   tr.appendChild(th);
//   for (var i = 0; i < brand.salesArray.length; i++) {
//     var td = document.createElement('td');
//     td.textContent = brand.salesArray[i];
//     tr.appendChild(td);
//   }
//   appendRows.appendChild(tr);
// }
//
// brands.push(new BrandData('Timberland', 2, 7));
// brands.push(new BrandData('Puma', 2, 5));
// brands.push(new BrandData('Converse', 1, 12));
//
// for (var i = 0; i < brands.length; i++){
//   makeBrandRows(brands[i]);
// }
