const userId = 234;
var userEmail = "Faizan@gmail.com"
let userPassword = "123445"
userState = "Sindh";
let userCity;


// let userId = 94; *user id value is not changeable because it is declared const above and it is not possible to change the value of a const

// console.log(userId);

console.table([userEmail,userId,userState,userPassword,userCity]); // a table is used to print multiple values in form of table 

// It is a suggestion to not use var as keyword because it dont have the ability of block-scope
// let is used as keyword
// we can also declare a variable without any keyword or const
// we can also intilize a variable without assigning a value