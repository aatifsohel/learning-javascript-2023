'use strict';

const greet = function(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
}

const greeterHey = greet('Hey');

greeterHey('Master');

greet('Hello')('John');

// using arrow function

const greet2 = (greeting) =>  (name) => console.log(`${greeting} ${name}`);


greet2('Helloooo')('Boy');