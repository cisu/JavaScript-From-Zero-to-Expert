////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const massMark_1 = 95;
const heightMark_1 = 1.88;
const massJohn_1 = 85;
const heightJohn_1 = 1.76;

function calculateBMI(mass, height) {
  let BMI = (mass / height ** 2).toFixed(2);
  return BMI;
}

const mark = calculateBMI(massMark_1, heightMark_1);
const john = calculateBMI(massJohn_1, heightJohn_1);

console.log(
  `Mark: ${mark} 
John: ${john}`
);

if (mark > john) {
  console.log(`Mark (BMI: ${mark}) has higher BMI than John (BMI: ${john})`);
} else if (mark < john) {
  console.log(`John (BMI: ${john}) has higher BMI than Mark (BMI: ${mark})`);
} else {
  console.log(`John (BMI: ${john}) and Mark (BMI: ${mark}) have the same BMI`);
}
