/*
    CIT 281 Project 1
    Name: Brady Rogers
*/

let dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Get Date
let currentDay = new Date();
//Get day of week as integer
let newVar = currentDay.getDay();
//Match integer with day of the week array
dayOfWeek[newVar];

console.log(dayOfWeek[newVar]);
