'use strict';

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

