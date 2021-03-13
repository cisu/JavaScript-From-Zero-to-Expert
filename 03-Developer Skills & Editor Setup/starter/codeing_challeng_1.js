///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// My solution
const printForecast = function (arr) {
  let result = ``;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    result += `... ${arr[i]}ºC in ${i + 1} ${i + 1 > 1 ? 'days' : 'day'} `;
  }
  return result + `...`;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));

//  1) Understanding the problem
// - Array transformed to string, separated by ...
//  - What is X days? Answer: index + 1

// 2) Breaking up sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - String needs to contain day (index +1)
// - Add ... between elements and end of strings
// - Log string to console

// Jonas Solution
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecastNew = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }

  console.log('... ' + str);
};

printForecastNew(data1);
