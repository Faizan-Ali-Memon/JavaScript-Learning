const name = "Faizan Ali"
const repoCount = 3

//console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo on github are ${repoCount}`);

// const gameName = new String('GTA')
const gameName = new String("GTA-Five-Game") 
console.log(gameName.split("-")) // It will split the string according to given conditions
console.log(gameName[0]); //this is used to show for which alphabet is on which index
console.log(gameName.__proto__);
console.log(gameName.length); // It will show the length of string
console.log(gameName.toUpperCase); // It will convert string characters into Upper case
console.log(gameName.toLowerCase); // It will convert string characters into Lower case
console.log(gameName.charAt(2)); // It will display the character at the given number.
console.log(gameName.indexOf('A')); // It will display the number at the given character.

const newString = gameName.substring(0, 4); // It display characters according to our given range 
console.log(newString);

const anotherString = gameName.substring(-8, 2); // It display characters according to our given range but from reverse
console.log(anotherString);

const tempString = "     Faizan    "
console.log(tempString)
console.log(tempString.trim()) // It will remove spaces //Trim.start and Trim.End also used in some cases

const url = "https://faizanali.com/faizanali%20memon"
console.log(url.replace('%20', '-'));

console.log(url.includes('Faizan'));