// adds current date to p element in header element
let currentDate = moment().format("dddd, MMMM Do, YYYY");
let currentDateEl = document.querySelector("#currentDay");
currentDateEl.textContent = `${currentDate.toString()}`;

// color highlights time-block rows based on current time
let currentTime = moment().format("HH");
let textareaEl = document.querySelectorAll("textarea");

// loops through 'textarea' elements
for (var i = 0; i < textareaEl.length; i++){
    // if current time (hour) is less than a textarea element's id, replace that element's class of past with a class of future
    if (+currentTime < +textareaEl[i].id) {
        textareaEl[i].classList.replace("past", "future");
    }
    // if current time (hour) is equal to a textarea element's id, replace that element's class of 'past' with a class of 'present'
    if (+currentTime == +textareaEl[i].id) {
        textareaEl[i].classList.replace("past", "present");
    }
};

// selects all 'i' elements and returns associated node list
var saveButtons = document.querySelectorAll(".saveBtn");
// loops through 'i' elements
for (var i = 0; i < saveButtons.length; i++){
    // adds event listeners on 'i' elements that run the 'savefunction' function() when clicked
    saveButtons[i].addEventListener("click", saveFunction);
    // sets the time parameter of each 'i' element equal to its associated time (in military time)
    saveButtons[i].time = i + 9;
};

// sets local storage keys (time) and associated value (textarea.value)
function saveFunction(event){
    localStorage.setItem(event.target.time, document.getElementById(event.target.time).value);
};

// gets local storage keys and adds associated value to appropriate textarea element based on ID (ID matches key)
function loadStorage() {
    var events = Object.keys(localStorage);
    for (var i = 0; i < events.length; i++) {
        document.getElementById(events[i]).value = localStorage.getItem(events[i]);
    };
};

// calls loadStorage function() to run on page load/refresh
loadStorage();
