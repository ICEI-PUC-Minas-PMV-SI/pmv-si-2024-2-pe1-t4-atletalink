
const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0); 
    const totalDays = lastDay.getDate(); 
    const firstDayIndex = firstDay.getDay(); 
    const lastDayIndex = lastDay.getDay(); 

    const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 1 - i);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date active ${activeClass}">${i}</div>`;

    }

    for (let i = 1; i <= 6 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;
};

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();

document.addEventListener("DOMContentLoaded", function () {
    const datesContainer = document.getElementById("dates");
    const monthYear = document.getElementById("monthYear");
    const confirmButton = document.getElementById("confirmButton");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Exibir o mês e ano atual
    function displayMonth(month, year) {
        monthYear.innerText = `${monthNames[month]} ${year}`;
        displayDates(month, year);
    }

    // Exibir as datas do mês
    function displayDates(month, year) {
        datesContainer.innerHTML = "";
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Preencher os dias vazios antes do primeiro dia do mês
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("date");
            datesContainer.appendChild(emptyDiv);
        }

        // Preencher os dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            const dateDiv = document.createElement("div");
            dateDiv.classList.add("date");
            dateDiv.innerText = day;
            dateDiv.addEventListener("click", selectDate);
            datesContainer.appendChild(dateDiv);
        }
    }

    // Seleção de data
    function selectDate(event) {
        const allDates = document.querySelectorAll(".date");
        allDates.forEach(date => date.classList.remove("selected"));
        event.target.classList.add("selected");

        // Atualiza o botão com a data selecionada
        const selectedDay = event.target.innerText;
        const selectedMonth = monthNames[currentMonth];
        const selectedYear = currentYear;

        confirmButton.innerText = `Data Selecionada: ${selectedDay} de ${selectedMonth} de ${selectedYear}`;
        confirmButton.disabled = false;
    }

    // Navegação entre meses
    document.getElementById("prevBtn").addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        displayMonth(currentMonth, currentYear);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        displayMonth(currentMonth, currentYear);
    });

    // Exibir o mês atual ao carregar a página
    displayMonth(currentMonth, currentYear);
});




