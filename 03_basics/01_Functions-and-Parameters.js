// Functions and Parameters 

function sayMyname() {
    console.log("F");
    console.log("A");
    console.log("I");
    console.log("Z");
    console.log("A");
    console.log("N");
}

// sayMyname()

function addTwoNumbers(num1, num2) {
    // let Result = num1 + num2
    // return Result
    return num1+num2 
// console.log(num1+num2);
}

const Result = addTwoNumbers(2, 4);

// console.log("Result:", Result);

function LogginUserMessage(username){ 
    if(username === undefined){ // WE CAN ALSO USE if(!username)
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(LogginUserMessage("Faizan"));
console.log(LogginUserMessage("FAIZAN"));