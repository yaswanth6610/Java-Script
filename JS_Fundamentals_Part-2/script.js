'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive : D");

// const private = 'audio';
// const interface = "audio";

//Functions----------->

function logger() {
    console.log("my name is yash");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(4,6);
console.log(appleJuice);

console.log(fruitProcessor(10,100));

const num = Number('456'); //type-casting is a in-built function


// function declaration's VS Expressions 
//we cannnot call a function brfore function expression. but, we can call a function before func declaring
//prefer to use function expression most

// function Declaration

function calcAge1(birthYear) {
    return 2024-birthYear;
}

const age1 = calcAge1(2001);


// function expression

const calcAge2 = function (birthYear) {
    return 2024-birthYear;
}
const age2 = calcAge2(2001);
console.log(age1,age2);



// ARROW functions

const calcAge3 = birthYear => 2024- birthYear;   // single line arroe fun's

console.log(calcAge3(2001));

const ageUntilRetirement = (birthYear, firstName) => {
    const age = 2024-birthYear;
    const retirement = 65- age;
    // return retirement;
    return `${firstName} has ${retirement} years to retire`;
}

console.log(ageUntilRetirement(2001, "yashwanth"));



// Functions calling other functions

function cutPieces(fruit) {
    // return fruit * 4;
    return fruit * 3;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of  apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(4,5));


// Arrays

const friend1 = "yash";
const friend2 = "dinesh";
const friend3 = "srinivas";

const friends = ['yash','dinesh','srinivas','pritham'];

//there is one more wau to create an array

const years = new Array(1,2,3,4,5,6,7);

console.log(years);

console.log(friends[3]);
friends[2] = 'sanjay';
// friends = ['sanjay'];
console.log(friends);

let arr1 = ['srinivas','pritham'];
console.log(arr1);
arr1 = ['yash','dinesh'];
console.log(arr1);

// arrays in js can store multiple data types values too

const n1 = 'yashwanth';
const arr2 = [n1, 'abc', 123, true, null, friends,3+3-1];

console.log(arr2);
console.log(arr2[5]);
*/
// Basic array operations (in-built methonds)

const friends = ['yash','dinesh','srinivas','pritham'];

// add in the end 
let b = friends.push('ray');
console.log(b);
console.log(friends);

// adding in the begining 

let a = friends.unshift('roy');
console.log(a);
console.log(friends);

// remove element from the end

let c = friends.pop();
console.log(c);
console.log(friends);

// remove element from the beg
let d = friends.shift();
console.log(d);
console.log(friends);

console.log(friends.indexOf('srinivas'));
console.log(friends.indexOf('bob'));



console.log(friends.includes('srinivas'));
console.log(friends.includes('bob'));
