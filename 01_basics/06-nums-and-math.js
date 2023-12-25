// ++++++++++++++++++++++++++++++++++++++ NUMBERS +++++++++++++++++++++++++++++++++++++++++++++++++++
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance); // It will display the balance with the prototype i.e Number 

console.log(balance.toString()); // It will convert the number which is balance into String
console.log(balance.toString().length); //It will show the lenth of the string
console.log(balance.toFixed(2)); // It used to show the fixed decimal points in output

const otherNumber = 123.888863767
console.log(otherNumber.toPrecision(4));

const hunderds = 100000
console.log(hunderds.toLocaleString('en-PK')); // It is best way to count hunderds

// +++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // It will display the absolute value
console.log(Math.round(4.2)); // It will display round of value
console.log(Math.ceil(4.2)); // It will choose top value and them display round of value
console.log(Math.floor(4.2)); // It will choose lower value and display round of value
console.log(Math.min(4, 3, 5, 8, 9)); // Used to find the minimum value in array
console.log(Math.max(4, 3, 5, 8, 9)); // Used to find the miximum value in array

console.log(Math.random());
console.log(Math.random()*10)
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1))+ min)
