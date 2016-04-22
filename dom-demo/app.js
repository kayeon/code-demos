
var newBirdSpot = document.getElementById('new-bird');

var newBirdEl = document.createElement('div');

newBirdEl.textContent = 'Parrot';
var newP = document.createElement('p');
var lesserParrot = newBirdEl.appendChild(newP);
var dynamicParrot = 'dynamic ';
lesserParrot.textContent = dynamicParrot + 'lesser parrot';
newBirdSpot.appendChild(lesserParrot);
newBirdSpot.style = 'color: teal';
newBirdSpot.classList.add('one');
//ewBirdSpot.classList.remove('two');
console.log(newBirdSpot.classList.contains('three'));

var birds = ['finch', 'penguin', 'ostritch', 'sioux berg?'];
for(var i = 0; i< birds.length; i++){
  var newBird = document.createElement('p');
  newBird.textContent =birds[i];
  newBirdSpot.appendChild(newBird);
}
