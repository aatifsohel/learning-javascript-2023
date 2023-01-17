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