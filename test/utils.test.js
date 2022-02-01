// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderAnimal } from '../utils.js';

const test = QUnit.test;

test('renderDog should return a <div> w/info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dog"><h2>BEAGLE</h2><img src="./assets/beagle.png"><p>The beagle's color is brown and a cuteness rating of 10</p></div>`;
    
    //Act 






    // Call the function you're testing and set the result to a const
    const actual = renderAnimal({ 
        type: 'beagle',
        color: 'brown',
        cuteness: 10,
        image: 'beagle.png',
    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
