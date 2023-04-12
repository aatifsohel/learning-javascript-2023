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