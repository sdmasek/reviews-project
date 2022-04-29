//use an array of objects to cycle through using the arrow buttons
//will need to make sure the first index of the cards array is displayed
let cards = [];
let employeeCard = {};

const textContainer = document.querySelector(".text-container")
const body = document.querySelector("body");

//create the html for the object to access
let employee = `
    
`;

let employeeName = document.querySelector("h3");
employeeCard.name = employeeName;

let employeePic = document.querySelector(".profile-img");
employeeCard.pic = employeePic;

let employeeTitle = document.querySelector("h4");
employeeCard.title = employeeTitle;

let employeeReview = textContainer.querySelector("p");
employeeCard.review = employeeReview;

body.addEventListener("load", loadFirstEmployee);

function loadFirstEmployee() {
    cards.push(employeeCard);
}