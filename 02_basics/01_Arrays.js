// Array

// Way of declearing an array

const myArr = [1, 2, 3 , 4, 5]
const myArr1 = new Array(1, 3, 5, 6)
const myHeroes = ["Marvels", "Spiderman"]
console.log(myArr[0]); // It will display 1 b/c the index of Array starts from 0

// Array Methods 

// myArr.push(6)
// myArr.push(8) // This will add new value in array
// myArr.pop() // This will simply remove the last value of the array

// myArr.unshift(8); // this will add the value in the start of the array
// myArr.shift(); // this will remove the starting value in the array


// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr1.join() // this will bind the arrays and convert the type of an array into string
// console.log(myArr1);
// console.log(newArr);
// console.log(typeof newArr);


// Splice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);