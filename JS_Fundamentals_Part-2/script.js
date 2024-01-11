'use strict';

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

