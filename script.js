const monthYear = document.getElementById("month-year")
const prevBtn = document.getElementById("previous")
const nextBtn = document.getElementById("next")
const daysContainer = document.getElementById("days")

//array of month names
const months = [
    "January","February","March","April","May","June","July","August","September","October","November","December"
];

//initialzize current date
let today = new Date()