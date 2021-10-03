// adds current date to p element in header element
let currentDate = moment().format("dddd, MMMM Do, YYYY");

// console.log(`${currentDate.toString()}`);

var currentDateEl = document.querySelector("#currentDay")
currentDateEl.textContent = `${currentDate.toString()}`;