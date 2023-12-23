//console.log(2 < 1);
//console.log(2 >= 1);
//console.log(2 == 1);
//console.log(2 = void);
//console.log(2 != 1);
//console.log(2 <= 1);

//console.log("2" <= 1);
//console.log("03" > 1);  // It change converts the datatype


// Avoid these type of conversions

console.log(null < 0);
console.log(null > 0);
console.log(null <= 0); // It converts the null into 0

console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);

// === it will also check the datatype before conversion

console.log(2 === "1");