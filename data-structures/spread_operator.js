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
};

const arr = [7, 8, 9];
const secondArr = [10, 11, 12];

const newArr = [...arr, ...secondArr];
console.log(newArr);
console.log(...newArr);

// adding new item into new array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];

// join multiple arrays
const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu);

const str = 'Master';
const letter = [...str, ' ', 'K.'];
console.log(letter);

// ordering pasta UserInput - real world example 
// const ingrediants = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")];
// restaurant.orderPasta(...ingrediants);

//objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// copying objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);
