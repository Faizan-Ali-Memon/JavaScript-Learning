function CalculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(CalculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Faizan",
    prices: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.prices}`);
}

// handleObject(user);
handleObject({
    username: "Faizan",
    prices: 499
});

const myNewArray = [100, 200, 300, 400, 500, ]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));
