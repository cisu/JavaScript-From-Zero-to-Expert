/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark_1 = 78;
// const heightMark_1 = 1.69;
// const massJohn_1 = 92;
// const heightJohn_1 = 1.95;

const massMark_1 = 95;
const heightMark_1 = 1.88;
const massJohn_1 = 85;
const heightJohn_1 = 1.76;

function calculatorBMI(mass, height) {
  let BMI = (mass / height ** 2).toFixed(2);
  return BMI;
}

let bmiMark_1 = calculatorBMI(massMark_1, heightMark_1);
let bmiJohn_1 = calculatorBMI(massJohn_1, heightJohn_1);
let markHigherBMI = bmiMark_1 > bmiJohn_1;

console.log(`Mark BMI: ${bmiMark_1}`);
console.log(`John BMI: ${bmiJohn_1}`);
console.log(`Is mark BMI higher than John?  "${markHigherBMI}"`);
