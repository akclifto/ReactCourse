
//es5 function
const square = function(x) {

    return x * x;
};

console.log(square(8));

//es6 lambda arrow function, always anon
// const squarrow = (x) => {
//     return x * x;
// }
//more concise version of the above, good for returning a single expression.
const squarrow = (x) => x * x;

console.log(squarrow(10));

const fullName = 'Adam Clifton';

//challenge

//verbose last
const getLast = (x) => {
    return x.split(' ')[1];
}
console.log(getLast(fullName))

//concise first
const firstName = (x) => x.split(' ')[0];
console.log(firstName(fullName));


