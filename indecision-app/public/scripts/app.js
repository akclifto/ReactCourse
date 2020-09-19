'use strict';

//args object - no longer bound with arrow functions


var add = function add(a, b) {
    // console.log(arguments)  //no access to arguments with arrow functs 
    return a + b;
};

console.log(add(55, 1, 50005));

// this keyword - no longer bound
var user = {
    name: 'Adam',
    cities: ['Tucson', 'Phoenix', 'Mesa'],
    //this accessible here with function bound to obj property (printplacedLived)
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        //this method throws error for anon function, this gets set to undef.
        // can fix by using arrow funct
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

//challenge 
var multiplier = {
    numbers: [1, 2, 3, 5, 8],
    multiBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiBy;
        });
    }
};
console.log(multiplier.multiply());
