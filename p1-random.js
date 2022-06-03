/*
    CIT 281 Project 1
    Name: Brady Rogers
*/

// Returns a random number between min (inclusive) and max (exclusive)
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//split string to give each unique value
let individual = alphabet.split("");
// console.log(individual);
// console.log(individual.join());

//Function to create a random variable between 5 and 25
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// console.log(getRandomInteger(5, 25));

// Given random number, output array values up to random integer value
const letterString = individual.slice(0, getRandomInteger(5, 25)).toString();
console.log(letterString);
