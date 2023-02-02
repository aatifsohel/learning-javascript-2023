'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]}, and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// iterable 
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Risotto', 'Risotto']);
console.log(ordersSet);

// string set
console.log(new Set('Hero'));
console.log(ordersSet.size);

// if set() has or not
console.log(ordersSet.has('Pizza'));

// add new item in the set()
ordersSet.add('Garlic Bread');

// delete a item from set()
ordersSet.delete('Pasta');

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', "Waiter", 'Manager', 'Chef', 'Waiter'];

const uniqueStaff = new Set(staff);
console.log(uniqueStaff);

console.log(new Set(staff).size);

console.log([...new Set(staff)]);