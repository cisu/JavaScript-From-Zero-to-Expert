// spread operator

const arr = [7, 8, 9];

const badBewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(badBewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

// spread operator: take all the values out of this arr array and then write them individually as if we wrote seven, eight, none here manually.

console.log(...newArr);
// same as
console.log(1, 2, 7, 8, 9);

// The spread operator is a bit similar to destructuring, because it also helps us get elements out of arrays.

// The big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables.

// And as a consequence, we can only use it in places where we would otherwise write values separated by commas.

// Spread operator  on all so-called iterables.

// Iterables: arrays, strings, maps, sets, NOT objects

const str = 'George';

const letters = [...str, ' ', 'S.'];

console.log(letters);

// Multiple values separated by a comma are usually only expected when we pass arguments into a function or when we build a new array.
