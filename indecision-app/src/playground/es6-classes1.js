//challenge
// setup constructor to take name and AudioProcessingEvent.


// person class
class Person {

    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return  'Hi, I am ' + this.name + ' !';
        return `Hi, I am ${this.name}. `;
    }
    
    getDescription() {
        return `${this.name.split(' ')[0]} is ${this.age} years old`;
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let descr = super.getDescription();

        if(this.hasMajor()){
            descr += `, and is majoring in ${this.major}.`;
        } else {
            descr += ', and major is undecided. ';
        }
        return descr;

    }

}

//challenge: Traveller extends the person class
class Traveller extends Person {

    constructor(name, age, homeLoc) {
        super(name, age);
        this.homeLoc = homeLoc;
    }

    getGreeting() {
        
        let greet = super.getGreeting();
        if(this.homeLoc) {
            greet += `I am visiting from ${this.homeLoc}!`
        } 
        return greet;
        
    }
}

const me = new Student('Adam Clifton', 34, 'Software Engineering');
const him = new Student('Jim');
const trav = new Traveller('John Baptist', 42, 'Levant');
const other = new Traveller('Someone else');
console.log(trav.getGreeting());
console.log(other.getGreeting());

// console.log(me.getDescription());
// console.log(him.getDescription());

// console.log(me.getGreeting(), him.getGreeting());
// console.log(me.getGreeting(), me.getAge());
