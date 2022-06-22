/* Random facts */

let facts = ["Space does not begin at a specific altitude above the Earth, but the Kármán line at 100 km is a commonly used definition.",
  'Space is a hard vacuum, meaning it is a void containing very little matter.',
"There is no sound in space because molecules are too far apart to transmit sound.",
"The space between galaxies is not completely empty but has an average of one atom per cubic meter.",
"There are an estimated 100-400 billion stars in our galaxy, the Milky Way.",
"The universe is observed to be 13.8 billion years old and has been expanding since its formation in the Big Bang.",
"In the observable universe there are an estimated 2 trillion (2,000,000,000,000) galaxies.",
"The International Space Station is the largest ever crewed object in space.",
"Spacecraft have visited all the known planets in our solar system."] ;



function randomlist(){
    let randomNumber = Math.floor(Math.random()*facts.length);
    document.getElementById('here').innerHTML = facts[randomNumber];
}



