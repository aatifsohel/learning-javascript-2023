'use strict';

/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {

        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            // creating new variable with same name as outer scopes' variable
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'New OUTPUT!'

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        // console.log(str);
        console.log(millenial);;

        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();
    return age;

}

const firstName = 'master'
calcAge(1991);
*/
/*
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'master';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;
*/
/*
console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1991)

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAgeArrow(1988);
*/
/*
const master = {
    firstName: 'master',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: () => console.log(`hey ${this.firstName}`),
}

master.greet();
console.log(this.firstName);
*/

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'master',
    age: 30,
};

const friend = me;
friend.age = 32;

console.log('Friend', friend);
console.log('Me', me);
