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

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

john.calcAge();

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

