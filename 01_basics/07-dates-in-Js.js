// dates

// let myDate = new Date();
// console.log(myDate); // this will display not readable result
// // console.log(myDate.toString); // this will display somehow readable result
// // console.log(myDate.toDateString);
// console.log(myDate.toLocaleDateString); 
// console.log(myDate.toLocaleString); 
// console.log(myDate.toISOString); 
// console.log(myDate.toTimeString); 
// console.log(typeof myDate); // Type is object

// to add own date
// let myCreatedDate = new Date(2024, 0, 1);
// let myCreatedDate = new Date(2024, 0, 1, 6, 3)
// console.log(myCreatedDate.toDateString);
// console.log(myCreatedDate);
// let myCreatedDate = new Date("2024-11-11");
// let myCreatedDate = new Date("2024, 0, 01");
// console.log(myCreatedDate.toLocaleString);

// let myTimeStamp = Date.now();
// // console.log(myTimeStamp); // getting output in miliseconds
// // console.log(myDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // In Seconds

let newDate = new Date()
console.log(newDate.getDate()); // From this we can get date day time etc
console.log(newDate.getMonth()+ 1); // From this we can get date day time etc here +1 added to get the exact month 

// For Customize date and time we can use 
console.log(newDate.toLocaleString('Default', {
    weekday: "long"
}));