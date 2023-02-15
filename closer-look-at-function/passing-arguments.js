'use strict';

const flight = 'LH234';

const master = {
    name: 'John Doe',
    passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 1234567890) {
        alert('Check In');
    } else {
        alert('Wrong Passport');
    }
};

checkIn(flight, master);
console.log(flight);
console.log(master);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(master);
checkIn(flight, master);