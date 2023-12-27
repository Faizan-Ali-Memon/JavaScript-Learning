const fbUser = Object() // Singleton object
// const fbUser = {} // Non Singleton object

fbUser.id = "123bcd"
fbUser.name = "Faizan"
fbUser.IsLoggedIn = false

// console.log(fbUser)

const regularUser = {
    email: "faizan@gmail.com",
    fullname: {
        userFullName: {
            firstname:"Faizan",
            lastname: "Memon"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);

//For merging Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)  // using this {} is a good practice

const obj3 = {...obj1, ...obj2} // 90% time we use this method for mering two objects
console.log(obj3)

users = [
    {
        id: 1,
        email:"Fai@gmail.com"
    },
    {
        id: 1,
        email:"Fai@gmail.com"
    },
    {
        id: 1,
        email:"Fai@gmail.com"
    },
    {
        id: 1,
        email:"Fai@gmail.com"
    },
    {

    },
    {

    },
    {

    }

]

users[1].email.fbUser
console.log(fbUser);
console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));
console.log(Object.entries(fbUser));
console.log(fbUser.hasOwnProperty('IsLoggedIn')); // to find the key exists or not


// De-Structuring the Objects

const course = {
    courseName: "Mathematics",
    price: "999",
    courseInstructor: "Faizan"
}

// course.courseInstructor 

const {courseInstructor: Instructor} = course
console.log(courseInstructor);
