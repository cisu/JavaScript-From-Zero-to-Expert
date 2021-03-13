// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// let person = 'Jonas';

// const current = 2021;

// const ageGeorge = current - 1989;
// const ageMaria = current - 1998;

// console.log(ageGeorge, ageMaria);

// console.log(ageGeorge / 2, ageMaria / 10, 2 ** 3);

// const firstName = 'George';
// const lastName = 'Grekis';

// console.log(`${firstName} ${lastName}`);

// let x = 10 + 5;
// x += 10; // x = x + 10  (25)
// x *= 4; // x = x * 4   (100)
// x++; // x = x + 1    (101)
// x--; // x = x - 1   (100)
// x = 100;
// let y = x--;
// console.log(`y = x--: `, y);

// x = 100;
// y = --x;
// console.log('y = --x: ', y);

// // Comparison operator
// console.log(ageGeorge > ageMaria);

// const firstName = 'George';
// const job = 'programmer';
// const birthYear = 1989;
// const Year = 2037;

// const george = `I'm ${firstName}, a ${Year - birthYear} ${job}`;

// //  Control structure if else

// const age = 15;

// if (age > 18) {
//   console.log('You can start driving lesson 🚗');
// } else {
//   const yearLeft = 18 - age;
//   console.log(
//     `Need ${yearLeft} ${
//       yearLeft === 1 ? 'year' : 'years'
//     } to start driving lesson`
//   );
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// // Type Conversion and Type Coercion

// // Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));

// console.log(Number(inputYear) + 18);
// console.log(+inputYear + 18);

// console.log(Number('Jonas'));
// console.log(String(23), 23);

// // Type coercion
// console.log(`I'm ${23} years old`);
// console.log('23' - '10' - 3);
// console.log('23' * '3');
// console.log('23' / '3');
// console.log('23' > '18');

// let n = '1' + 1;
// console.log(n);
// n = n - 1;
// console.log(n);

// // Truthy and Falsy

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('George'));
// console.log(Boolean({}));
// console.log(Boolean(0));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job');
// }

// let height = 0;

// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const favorite = Number(prompt("What's your favorite number?"));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   // '23' == 23
//   console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//   console.log('7 is also a cool number');
// } else if (favorite === 9) {
//   console.log('9 is also a cool number');
// }else {
//   console.log('Number is not 23 or 7');
// }

// // Logical Operators

// const hasDiversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDiversLicense && hasGoodVision);
// console.log(hasDiversLicense || hasGoodVision);
// console.log(!hasDiversLicense);

// const shouldDrive = hasDiversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log('Is able to drive');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = true; // C
// console.log(hasDiversLicense && hasGoodVision && isTired);

// if (shouldDrive && !isTired) {
//   console.log('Is able to drive');
// } else {
//   console.log('Someone else should drive...');
// }

// // The SWitch Statement
// const day = 'monday';

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday');
//     console.log('Go to codding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record Videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend ');
//     break;
//   default:
//     console.log('Not a valid Day');
// }

// if (day == 'monday') {
//   console.log('Today is Monday');
//   console.log('Go to codding meetup');
// } else if (day == 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day == 'wednesday' || day == 'thursday') {
//   console.log('Write code examples');
// } else if (day == 'friday') {
//   console.log('Record Videos');
// } else if ((day == 'saturday' || day == 'sunday')) {
//   console.log('Enjoy the weekend ');
// } else {
//   console.log('Not a valid Day');
// }

// Statements Expresions

// // Expresions: it's a code produce some a value

// Conditional (Ternary) Operator

const age = 19;
// age >= 18
//   ? console.log('I like to drink wine 🍷')
//   : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(`i really like to drink ${drink}`);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}

console.log(drink2);
