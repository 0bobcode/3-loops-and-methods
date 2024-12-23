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

//create cells for each days of the month 
for(let day= 0;day<=daysInMonth;day++){
    const daysCell = document.createElement("div");
    daysCell.textContent = day;
    if(isCurrentMonth&&day == today.getDate()){
        const todaySpan = document.createElement("span");
        todaySpan.textContent = day;
        todaySpan.classList.add("current-day");
        daysCell.innerHTML = ""
    }
    daysCell.appendChild(todaySpan)
}

prevBtn.addEventListener("click",()=>{
    currentMonth--
    if(currentMonth<0){
        currentMonth = 11
        currentYear--
        
    }
    renderCalender(currentMonth,currentYear)
});

nextBtn.addEventListener("click",()=>{
    currentMonth++
    if(currentMonth>=11){
        currentMonth = 0
        currentYear++
    }
    renderCalender(currentMonth,currentYear)
})
renderCalender(currentMonth,currentYear)