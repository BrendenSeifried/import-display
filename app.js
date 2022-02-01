// import functions and grab DOM elements
import { animal } from './animals.js';
import { renderAnimal } from './utils.js';
//console.log(dogs);

import { planes } from './planes.js';
import { renderPlanes } from './utils.js';

import { sports } from './sports.js';
import { renderSports } from './utils.js';

import { cars } from './cars.js';
import { renderCar } from './utils.js';


const animalList = document.getElementById('animals');

function renderAnimals() {
    for (let item of animal){
        const div = renderAnimal(item);
        animalList.append(div);
    }
}

renderAnimals();



// for (let dog of dogs) {
//     const div = renderDogs(dog);
//     dogList.append(div);
// }
// // let state



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const planeList = document.getElementById('plane');

  
// function renderSports() {
//     for (let sport of sports){
//         const div = renderSports(sport);
//         sportList.append(div);
//     }
// }

// renderSports();

// for (let plane of planes){ 
//     const div = renderPlanes(plane);
//     planeList.append(div);
// }

const sportList = document.getElementById('sport');

  
for (let sport of sports) {
    const div = renderSports(sport);
    sportList.append(div);
}



for (let car of cars) {
    const div = renderCar(car);
    carList.append(div);
}

