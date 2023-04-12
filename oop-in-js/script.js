'use strict';

const Person = function (firstName, birthYear) {
    this.firstName  = firstName;
    this.birthYear = birthYear;
};

const john = new Person('John', 1999);

console.log(john);
console.log(john instanceof Person);