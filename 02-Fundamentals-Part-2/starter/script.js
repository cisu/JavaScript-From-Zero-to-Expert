'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

// // function

// function logger() {
//   console.log('My name is Jonas');
// }

// // calling /running / invoking function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// // fruitProcessor(5, 0);

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // Function Declaration vs function Expressions

// // function declaration
// function calcAge1(birthYear) {
//   //   const age = 2037 - birthYear;
//   //   return age;
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1989);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1989);

// console.log(age1, age2);

// // Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUnitRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearUnitRetirement(1989, 'George'));

// // Function Calling Other Function (callback)

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUnitRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🍕`);
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUnitRetirement(1989, 'George'));
// console.log(yearsUnitRetirement(1950, 'Mike'));

// // Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'George';
// const george = [firstName, 'Grekis', 2037 - 1989, 'programmer', friends];
// console.log(george);

// // Exercise
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// const names = ['George', 'Maria', 'Sofia'];

// function sayHi(hi) {
//   return `Hello ${hi}`;
// }

// const greetings = [
//   sayHi(names[0]),
//   sayHi(names[1] ),
//   sayHi(names[names.length - 1]),
// ];

// console.log(greetings);

// // basic Array Operations

// // add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// // the push function return the length of the new array.
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // remove elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);

// console.log(friends.includes('Steven'));
// console.log(friends.includes('23'));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

// // Dot vs Bracket Notation in object

// const george = {
//   firstName: 'George',
//   lastName: 'Grekis',
//   age: 2021 - 1989,
//   job: 'programmer - full-stack developer',
//   friends: ["Jimmy's", 'Thodwras', 'Kwnstantinos'],
// };

// console.log(george);

// // Dot Notation
// console.log(george.lastName);

// // Bracket Notation with a string
// console.log(george['age']);

// // const nameKey = 'Name';

// // console.log(george['first' + nameKey]);
// // console.log(george['last' + nameKey]);

// // const interestedIn = prompt(
// //   'What to you want to know about Jonas? Chose between firstName, lastName, age, job and friend'
// // );

// // console.log(interestedIn);
// // console.log(george.interestedIn);

// // if (george[interestedIn]) {
// //   console.log(george[interestedIn]);
// // } else {
// //   console.log('Please chose one of the value');
// // }

// george.location = 'Greece';
// george['twitter'] = '@georgegrekis';
// console.log(george);

// // Challenge
// // "George has 3 friends and his best friend is called Micheal"

// const challenge = `${george.firstName} has ${george.friends.length} friends and his best friend is called ${george.friends[0]}`;

// console.log(challenge);

// // Object Methods

// const george = {
//   firstName: 'George',
//   lastName: 'Grekis',
//   birthYear: 1989,
//   job: 'programmer - full-stack developer',
//   friends: ["Jimmy's", 'Thodwras', 'Kwnstantinos'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
//       george.job
//     } and he ${this.hasDriversLicense ? 'has' : "hasn't"} a driver's license`;
//     return this.summary;
//   },
// };

// // console.log(george.calcAge());

// // console.log(george.age);
// // console.log(george.age);
// // console.log(george.age);

// console.log(george.getSummary());

// // console.log(george['calcAge'](george['birthYear']));

// // Iteration the for loop

// // for loop keeps runnings while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️🏋🏽‍♂️`);
// }

// // Looping Arrays, Breaking and Continuing...

// const georgeArray = [
//   'George',
//   'Grekis',
//   2037 - 1989,
//   'full stack developer',
//   ["Jimmy's", 'Thodwras', 'Kwnstatninos'],
//   true,
// ];

// const types = [];

// for (let i = 0; i < georgeArray.length; i++) {
//   // Reading from jonas array
//   console.log(georgeArray[i], typeof georgeArray[i]);

//   //   Filling types array
//   //   types[i] = typeof georgeArray[i];
//   types.push(typeof georgeArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('--ONLY STRINGS--');
// for (let i = 0; i < georgeArray.length; i++) {
//   if (typeof georgeArray[i] !== 'string') continue;

//   console.log(georgeArray[i], typeof georgeArray[i]);
// }

// console.log('--BREAK WITH NUMBER--');
// for (let i = 0; i < georgeArray.length; i++) {
//   if (typeof georgeArray[i] === 'number') break;

//   console.log(georgeArray[i], typeof georgeArray[i]);
// }

// Looping Backward and Loops in Loops

// const georgeArray = [
//   'George',
//   'Grekis',
//   2037 - 1989,
//   'full stack developer',
//   ["Jimmy's", 'Thodwras', 'Kwnstatninos'],
// ];

// for (let i = georgeArray.length - 1; i >= 0; i--) {
//   console.log(georgeArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`exercise ${exercise}`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`${rep} repetition for exercise ${exercise}`);
//   }
// }

// The while loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️🏋🏽‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️🏋🏽‍♂️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// console.log(dice);

// while (dice !== 6) {
//   console.log(`You roll a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice == 6) console.log('Loop is about to end...');
// }

// console.log(dice);
