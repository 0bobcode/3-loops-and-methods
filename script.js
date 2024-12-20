const monthYear = document.getElementById("month-year")
const prevBtn = document.getElementById("previous")
const nextBtn = document.getElementById("next")
const daysContainer = document.getElementById("days")

//array of month names
const months = [
    "January","February","March","April","May","June","July","August","September","October","November","December"
];

//initialzize current date
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalender(month,year){
daysContainer.innerHTML = "";
monthYear.textContent = `month:${month}/year:${year}`
return
}

renderCalender(12,2024)

const firstDay = new Date(year,month,1).getDay();
const daysInMonths = new Date(year,month+1,0).getDate()
const isCurrentMonth = (month===today.getMonth())&&(year===today.getFullYear())

for(let i = 0;i<firstDay;i++){
    let blankCell = document.createElement("div");
    blankCell.classList.add("blank")
    daysContainer.appendChild(blankCell)
}