const user = {
    username: "Faizan",
    price: 999,

    WelcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // this works on current context
    }
}

// user.WelcomeMessage()
// user.username = "Faizan Ali"
// user.WelcomeMessage()

// console.log(this); // This is empty 


// function chai() {
//     username = "Faizan Memon"
//     console.log(this.username);
// }


// const chai = function(){
//     let username = "Faizan Memon"
//     console.log(this.username);
// }

//       const chai = () =>  {
//       let username = "Faizan Memon"
//       console.log(this.username);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 


// const addTwo = (num1, num2) => num1 + num2

//Implicity Return
// const addTwo = (num1, num2) => (num1 + num2)

// using objects

// const addTwo = (num1, num2) => ({username: "Faizan"})

console.log(addTwo(3,9));