
//Two types of Datatypes

//1- Primitive/Call by Value

//Types of Primitive : String, Number, BigInt, Boolean, Null, undefined, Symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideLoggedIn = null
let EmailID; // undefined

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

const bigNumber = 12333345568334373n

//2-Reference (Non-Primitive)
//Types : Array, Objects and Functions

const heros = ["spiderman", "avengers", "marvels"]

let myObj = {
    name: "Faizan",
    age: 20
}

const myFunction = function() {
    console.log("Hello World");
}

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */
      // JavaScript is the dynamically typed language



// ============================================================================================

// Stack(Primitive)-Change in Reference value , Heap(Non-Primitive) -Change in Original Memory

let myYoutubename = "faizanalidotcom"

let anotherName = "faizandotcom"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "faizanali@gmail.com",
    npay : "user@npay"

}

let userTwo = userOne

userTwo.email = "faizan@gmail.com"


console.log(userOne.email)
console.log(userTwo.email)
