// 1- Singleton 
// Object.create


// Object literals

const mySym = Symbol("myKey1")


const JsUser = { // {} ===>This is object
    name: "Faizan",
    age: 20,
    [mySym]: "myKey1",
    location: "Sindh",
    email: "faizan@gmail.com",
    isLoggedIn: true,
    lastLogInDays: ["Monday", "Saturday"]
} 

// console.log(JsUser.email); // we can access email through this method
// console.log(JsUser["email"]); // This is another method to access the email from object
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "faizan@quest.pk" // for change value of any object
// console.log(JsUser.email);
// Object.freeze(JsUser);  // For freezing values of any user
JsUser.email = "faizan@bscs.pk"
// console.log(JsUser.email);


// Adding an Function for greetings

JsUser.greetings = function (){
    console.log("Hello JS Users", `${this.age}`);
}

console.log(JsUser.greetings()); 
console.log(JsUser.greetings); // Function didnt execute it just return the reference of the function
