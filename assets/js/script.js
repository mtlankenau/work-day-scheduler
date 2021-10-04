// adds current date to p element in header element
let currentDate = moment().format("dddd, MMMM Do, YYYY");
var currentDateEl = document.querySelector("#currentDay");
currentDateEl.textContent = `${currentDate.toString()}`;

// color highlights time-block rows based on current time
let currentTime = moment().format("HH");
let textareaEl = document.querySelectorAll("textarea");

if (currentTime === "9") {
    textareaEl[0].classList.replace("future", "present");
} if (currentTime === "10") {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "present")
} if (currentTime === "11") {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "past")
    textareaEl[2].classList.replace("future", "present")
} if (currentTime === "12") {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "past")
    textareaEl[2].classList.replace("future", "past")
    textareaEl[3].classList.replace("future", "present")
} if (currentTime === "13") {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "past")
    textareaEl[2].classList.replace("future", "past")
    textareaEl[3].classList.replace("future", "past")
    textareaEl[4].classList.replace("future", "present")
} if (currentTime === "14") {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "past")
    textareaEl[2].classList.replace("future", "past")
    textareaEl[3].classList.replace("future", "past")
    textareaEl[4].classList.replace("future", "past")
    textareaEl[5].classList.replace("future", "present")
} if (currentTime === "15") {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "past")
    textareaEl[2].classList.replace("future", "past")
    textareaEl[3].classList.replace("future", "past")
    textareaEl[4].classList.replace("future", "past")
    textareaEl[5].classList.replace("future", "past")
    textareaEl[6].classList.replace("future", "present")
} if (currentTime === "16") {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "past")
    textareaEl[2].classList.replace("future", "past")
    textareaEl[3].classList.replace("future", "past")
    textareaEl[4].classList.replace("future", "past")
    textareaEl[5].classList.replace("future", "past")
    textareaEl[6].classList.replace("future", "past")
    textareaEl[7].classList.replace("future", "present")
} if (currentTime === "17") {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "past")
    textareaEl[2].classList.replace("future", "past")
    textareaEl[3].classList.replace("future", "past")
    textareaEl[4].classList.replace("future", "past")
    textareaEl[5].classList.replace("future", "past")
    textareaEl[6].classList.replace("future", "past")
    textareaEl[7].classList.replace("future", "past")
    textareaEl[8].classList.replace("future", "present")
} if (currentTime > 17) {
    textareaEl[0].classList.replace("future", "past")
    textareaEl[1].classList.replace("future", "past")
    textareaEl[2].classList.replace("future", "past")
    textareaEl[3].classList.replace("future", "past")
    textareaEl[4].classList.replace("future", "past")
    textareaEl[5].classList.replace("future", "past")
    textareaEl[6].classList.replace("future", "past")
    textareaEl[7].classList.replace("future", "past")
    textareaEl[8].classList.replace("future", "past")
};




// var localStorageInput = localStorage.getItem("event");
// var textareaContentTest = document.querySelector(".description");
// textareaContentTest.textContent = localStorageInput;

// // local storage for saving events to time blocks

// document.querySelectorAll(".saveBtn").forEach(link => link.addEventListener("click", saveFunction));

// function saveFunction(){
//     var textareaContent = document.querySelector(".description")
//     for (var i = 0; i < textareaContent.length; i++) {
//         localStorage.setItem("event", textareaContent);
//     }
// };
