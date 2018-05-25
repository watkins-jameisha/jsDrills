setName();
function setName() {
    let name = 'Jameisha Watkins';
   
    console.log(name);
}
n = 'Jameisha Watkins';
var n;
console.log(n);

console.log('any text');
let avg = findAvg(3, 2);
console.log('any text', avg);
function findAvg(a, b) {
    console.log('any text');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['mangoes', 'banana', 'apples'];
let favFruit;

function printFruits() {
    favFruit = fruits[2];
    console.log(fruits[0]);
}

function printFavFruit() {
    console.log(favFruit);
}

printFruits();
printFavFruit();

let fruits2 = ['oranges', 'papaya', 'avacado'];
let leastFruit;

function printFruits2() {
    leastFruit = fruits2[2];
    console.log(fruits2[0]);
}

function printleastFruits() {
    console.log(leastFruit);
}

printFruits2();
printleastFruits();

sayName(n);
function sayName(name) {
// let name = 'Meme'
console.log("Hello", name)
}