//args object - no longer bound with arrow functions


const add = (a,b) => {
    // console.log(arguments)  //no access to arguments with arrow functs 
    return a + b;
};

console.log(add(55, 1, 50005));



// this keyword - no longer bound
const user = {
    name : 'Adam',
    cities: [
        'Tucson',
        'Phoenix',
        'Mesa'
    ],
    //this accessible here with function bound to obj property (printplacedLived)
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);

        //this method throws error for anon function, this gets set to undef.
        // can fix by using arrow funct
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());


//challenge 
const multiplier = {
    numbers: [1, 2, 3, 5, 8],
    multiBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiBy);
    }
};
console.log(multiplier.multiply());