//Create an array of objects that display each employee info
const reviewsArray = [
    {
        name: "Cindy Smith",
        job: "Web Developer",
        img: "images/employee1-min.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque quas libero quia optio rem
     debitis exercitationem alias possimus, sint iure! Voluptatibus, est? Corrupti nemo veritatis
     repellendus
     voluptatem iste facilis?`

    },
    {
        name: "Lou Allegro",
        job: "Web Designer",
        img: "images/resized-Lou.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque quas libero quia optio rem
     debitis exercitationem alias possimus, sint iure! Voluptatibus, est? Corrupti nemo veritatis
     repellendus
     voluptatem iste facilis?`

    },
    {
        name: "Roger Kobe",
        job: "QA Engineer",
        img: "images/resized-Roger.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque quas libero quia optio rem
     debitis exercitationem alias possimus, sint iure! Voluptatibus, est? Corrupti nemo veritatis
     repellendus
     voluptatem iste facilis?`

    },
    {
        name: "Natasha Perth",
        job: "Project Manager",
        img: "images/resized-Natasha.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque quas libero quia optio rem
     debitis exercitationem alias possimus, sint iure! Voluptatibus, est? Corrupti nemo veritatis
     repellendus
     voluptatem iste facilis?`

    },
];

let reviews = 0;

const textContainer = document.querySelector("text-container");

let employeeName = document.querySelector("h3");
let title = document.querySelector("h4");
let employeeImg = document.querySelector(".profile-img");
let text = document.querySelector(".description");

const rightBtn = document.querySelector("#btn-right");
const leftBtn = document.querySelector("#btn-left");
const randomBtn = document.querySelector("#btn-random");

let item = reviewsArray[reviews];

window.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    showPerson(reviews);

});

//show next person
rightBtn.addEventListener("click", function () {
    reviews++;
    if (reviews > reviewsArray.length - 1) {
        reviews = 0;
    }
    showPerson(reviews);
});

//show prev person
leftBtn.addEventListener("click", function () {
    reviews--;
    if (reviews < 0) {
        reviews = reviewsArray.length - 1;
    }
    showPerson(reviews);
});

//randomly generate a person
randomBtn.addEventListener("click", function () {
    showRandomPerson(reviews);
});

function showPerson(person) {
    let item = reviewsArray[person];
    employeeName.textContent = item.name;
    title.textContent = item.job;
    employeeImg.src = item.img;
    text.textContent = item.text;
    console.log(item);
}

function showRandomPerson(randomPerson) {
    let randomItem = reviewsArray[Math.floor(Math.random() * reviewsArray.length)];
    employeeName.textContent = randomItem.name;
    title.textContent = randomItem.job;
    employeeImg.src = randomItem.img;
    text.textContent = randomItem.text;
    console.log(randomItem);
}


console.log(item.name);