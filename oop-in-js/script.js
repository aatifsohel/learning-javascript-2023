'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const john = new Person('John', 1999);
console.log(john);

// 1. New {object} created
// 2. function is called, this => {object}
// 3. {object} linked to prototype
// 4. function automatically return {object}

const jane = new Person('Jane', 2013);
const matt = new Person('Matt', 2003);
console.log(jane, matt);

console.log(john instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
}

Person.hey();
// john.hey();


// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

john.calcAge();

/*
console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('species'));

console.log(john.__proto__);
// Object.prototype (top of prototype chain) ↓
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 3, 5, 5, 1, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Don't create something like this in real time - bad practice
Array.prototype.unique = function ( ) {
  // return unique item from an array 
  return [...new Set(this)];
}
console.log(arr.unique());

console.dir(x => x + 1);

// Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1.make);
console.log(car2.make);
*/
// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  
  // instance method
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  // set a property that already exists
  set fullName (name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}

const janny = new PersonCl('Janny', 2000);
console.log(janny);
janny.calcAge();

console.log(janny.__proto__ === PersonCl.prototype);

janny.greet();

PersonCl.hey();

// POINTS to remember
// 1. classes are NOT hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode
/*
const account = {
  owner: 'john',
  movements: [200, 530, 120, 300],
  
  get latest() {
    return this.movements.slice(-1).pop();
  },
  
  set latest(mov) {
    this.movements.push(mov)
  }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

console.log();
console.log();

console.log(ac);
*/
