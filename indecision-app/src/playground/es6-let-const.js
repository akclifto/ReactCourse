var name = 'adam';
var name = 'bob';

console.log('NameVar', name);

let letname = 'adam';
//can reassign let
letname = 'bobb'
console.log('letname', letname)

//cant reassign const
const constname = 'frank';
console.log('constname', constname)


function getPetName() {

    let petName = 'pal';
    console.log(petName);
    return petName;

}

let petName = getPetName();
console.log('petname', petName)

//block scoping
//var breaks out of the block level scope, let and const are locked in like in Java or any OOP language
const fullname = 'Test Clifton';
let first;

if(fullname){
    first = fullname.split(' ')[0];
    var last = fullname.split(' ')[1];
    console.log(first);
    console.log(last);
}

console.log('outside function first', first)
console.log('outside function first', last)
console.log('outside function last', last)
