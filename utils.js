export function renderAnimal(dog) {
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
    img.src = `./assets/${plane.stats.image}`;
   

    //p
    const p = document.createElement('p');
    p.textContent = `The${plane.type} plane is a ${plane.stats.size} size and its speed is  ${plane.stats.speed}`;
    div.append(h2, img, p);
    return div;
}

export function renderSports(sport) {
    const div = document.createElement('div');
    div.classList.add('sport');

    const p = document.createElement('p');
    p.textContent = `${sport}`;
    div.append(p);
    return div;
    
}


export function renderCar(car) {
    const div = document.createElement('div');
    div.classList.add('car');
  
    const h2 = document.createElement('h2');
    h2.textContent = car.make.toUpperCase();
  

    const ul = document.createElement('ul');
    for (let stat of car.stats) {
        const li = document.createElement('li');
        li.textContent = stat;
        ul.append(li);
    }

    // const p = document.createElement('p');
    // p.textContent = car.stats;

    //const img = document.createElement('img');
    //img.src = `./assets/${car.image}`;
   
    div.append(h2, ul);
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

