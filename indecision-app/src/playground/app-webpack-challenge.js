
//how to import specific things from another file. 
// import anythingIWant, { square, add } from './utils.js';
import { square, add, subtract } from './utils.js';

//challenge from person.js using default import from person.js
import senior from './person.js';


//how to import everything from another file. 
const person = require('./person.js');



console.log("app.js is running!");

//from utils.js, imported specific things.
console.log(square(6));
console.log(add(9, 12));
console.log(subtract(15, 4));

//subtract is the default in utils.js, but when we import it, we can call it anything we want
// console.log(anythingIWant(64));

console.log(senior(64));
console.log(senior(65));

// from person.js, imported everything
// console.log(person.isAdult(19));
// console.log(person.isAdult(15));
// console.log(person.canDrink(25));
// console.log(person.canDrink(22));

