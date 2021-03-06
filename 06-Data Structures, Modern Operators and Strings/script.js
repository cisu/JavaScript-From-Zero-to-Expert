'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // function inside another function it's called method that
  // this order is a method
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

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
};

// // first lesson
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, Course] = restaurant.order(2, 0);
// console.log(starter, Course);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // end of first lesson

// Destructuring Objects

// const { name, openingHours, categories } = restaurant;

// // console.log(name, openingHours, categories);

// // variable names different from the property names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// // console.log(restaurantName, hours, categories);

// // Default values
// const { menu, starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri,
//   fri: { open, close },
//   fri: { open: o, close: c },
// } = openingHours;

// console.log(fri);
// console.log(open, close);
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// spread operator

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//  Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(`This is all menu: ${menu}`);

// // Real-world example
// const ingredients = [
//   prompt("Let's make pasta Ingredient 1?"),
//   prompt("Let's make pasta Ingredient 2?"),
//   prompt("Let's make pasta Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundedIn: 1989,
  ...restaurant,
  founder: 'Kalhsperaaa!',
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
