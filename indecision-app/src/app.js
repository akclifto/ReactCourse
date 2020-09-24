
//how to import specific things from another file. 
import { square, add } from './utils.js';

//how to import everything from another file. 
const person = require('./person.js');


console.log("app.js is running!");

//from utils.js, imported specific things.
console.log(square(6));
console.log(add(9, 12));

//from person.js, imported everything
console.log(person.isAdult(19));
console.log(person.isAdult(15));
console.log(person.canDrink(25));
console.log(person.canDrink(22));

