'use strict';

//es5 function
var square = function square(x) {

    return x * x;
};

console.log(square(8));

//es6 lambda arrow function, always anon
// const squarrow = (x) => {
//     return x * x;
// }
//more concise version of the above, good for returning a single expression.
var squarrow = function squarrow(x) {
    return x * x;
};

console.log(squarrow(10));

var fullName = 'Adam Clifton';

//challenge

//verbose last
var getLast = function getLast(x) {
    return x.split(' ')[1];
};
console.log(getLast('adam clifton'));

//concise first
var firstName = function firstName(x) {
    return x.split(' ')[0];
};
console.log(firstName('adam clifton'));
