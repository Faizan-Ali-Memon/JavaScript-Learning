// Global Scope, it is accessible in whole program
let a = 200
const b = 20
var c = 30

// Block/Local Scope, it is only accessible in the block
if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
}

// console.log("Outer", a);
// console.log(b);
// console.log(c);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Nested Scopes++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function One() {
    const username = "Faizan"
    function two() {
    const website = "Youtube"
    console.log(username);
    }
    // console.log(website);
    two()
}
//One()

if(true) {
    username = "Faizan "
    if(username === "Faizan "){
        website = "Youtube"
        // console.log(username + website);
        // console.log(website);
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num) {
    return (num + 1)
}
console.log(addone(3));
////////////////////////////////////////////////
const addTwo = function(num){
    return num +2
}
console.log(addTwo(5));
