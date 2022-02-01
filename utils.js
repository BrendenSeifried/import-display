export function renderDogs(dog) {
    const div = document.createElement('div');
    div.classList.add('dog');

    const h2 = document.createElement('h2');
    h2.textContent = dog.type.toUpperCase();
   
    //image
    const img = document.createElement('img');
    img.src = `./assets/${dog.image}`;
    
    //p
    const p = document.createElement('p');
    //p.classList.add();
    p.textContent = `The ${dog.type}'s color is ${dog.color} and a cuteness rating of ${dog.cuteness}`;
    div.append(h2, img, p);
    return div;

}


export function renderPlanes(plane) {
    const div = document.createElement('div');
    div.classList.add('plane');

    const h2 = document.createElement('h2');
    h2.textContent = plane.type.toUpperCase();
    div.append(h2);
    //image
    const img = document.createElement('img');
    img.src = `./assets/${plane.image}`;
   

    //p
    const p = document.createElement('p');
    p.textContent = `The${plane.type} plane is a ${plane.size} size and its speed is  ${plane.speed}`;
    div.append(h2, img, p);
    return div;
}

export function renderSports(sport) {
    const div = document.createElement('div');
    div.classList.add('sport');

    const h2 = document.createElement('h2');
    h2.textContent = sport.type.toUpperCase();
    div.append(h2);
    //image
    const img = document.createElement('img');
    img.src = `./assets/${sport.image}`;
   

    //p
    const p = document.createElement('p');
    p.textContent = `${sport.type} is played with ${sport.players} players and its injury risk is  ${sport.injury}`;
    div.append(h2, img, p);
    return div;
}


// export function renderPlanes(plane) {
//     const div = document.createElement('div');
//     div.classList.add('plane');

//     const h2 = document.createElement('h2');
//     h2.textContent = plane.type.toUpperCase();
//     div.append(h2);
//     //image
//     const img = document.createElement('img');
//     img.src = `./assets/${plane.image}`;
//     div.append(h2, img);

//     //p
//     const p = document.createElement('p');
//     p.textContent = `${plane} with ${plane.size} and a cuteness rating of ${plane.cuteness}`;
//     return div;
// }
//     <div class="animal">
//     <h2>DOG</h2>
//     <image src="assets/alchemy-logo.png"></image>
//     <p>Dogs are great. 10/10</p>
// </div>

