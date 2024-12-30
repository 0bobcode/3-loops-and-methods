const monthYear = document.getElementById("month-year")
const prevBtn = document.getElementById("previous")
const nextBtn = document.getElementById("next")
const daysContainer = document.getElementById("days")

//array of month names
const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
//to acces an arrays element you have to write the name of the array followed by square brackets and mention possition of element starting from 0
console.log(months[0])
//initialzize current date
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalender(month, year) {
    daysContainer.innerHTML = "";
    monthYear.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const isCurrentMonth = (month === today.getMonth()) && (year === today.getFullYear());

    for (let i = 0; i < firstDay; i++) {
        let blankCell = document.createElement("div");
        blankCell.classList.add("blank")
        daysContainer.appendChild(blankCell)
    }
    // Create cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) { // Start from day=1
        const dayCell = document.createElement("div");
        dayCell.textContent = day;

        if (isCurrentMonth && day === today.getDate()) {
            dayCell.classList.add("current-day"); // Highlight current day
        }

        daysContainer.appendChild(dayCell);
    }

}



prevBtn.addEventListener("click", () => {
    currentMonth--
    if (currentMonth < 0) {
        currentMonth = 11
        currentYear--

    }
    renderCalender(currentMonth, currentYear)
});

nextBtn.addEventListener("click", () => {
    currentMonth++
    if (currentMonth >= 12) {
        currentMonth = 0
        currentYear++
    }
    renderCalender(currentMonth, currentYear)
})
renderCalender(currentMonth, currentYear)