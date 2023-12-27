const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // this will not merge arrays but it just disply the result a array inside a array 

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes) // we can also use concat instead of push
// console.log(allHeroes); // this will merge arrays and give a new result

//We can also use spread operator instead of concat

const new_all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(new_all_heroes);

const anotherArr = [1,2,3,4,5,[6,7,8,9,[3,5,6,7,[7,8,9]]]] // to solve these situations we use flat
const real_anotherArr = anotherArr.flat(Infinity);
console.log(real_anotherArr);

console.log(Array.isArray("Faizan"));
console.log(Array.from("Faizan"));
console.log(Array.from({name: "Faizan"})); // Interesting Case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  // this will made array directly 