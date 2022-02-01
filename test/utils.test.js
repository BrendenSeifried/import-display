// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderAnimal } from "../utils.js";

const test = QUnit.test;

test('renderDog should return a <div> w/info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal">
    <h2>DOG</h2>
    <img src="assets/alchemy-logo.png">
    <p>Dogs are great. 10/10</p>
</div>`;
    
    //Act 






    // Call the function you're testing and set the result to a const
    const actual = renderAnimal({ type: 'beagle',
    numberOfLegs: 4,
    color: brown,
    cuteness: 10,
    image: 'assets/alchemy-logo.png';
});
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
