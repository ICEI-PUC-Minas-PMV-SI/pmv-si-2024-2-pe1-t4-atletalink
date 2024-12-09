// Variáveis globais
let selectedDate = null; // Armazenar a data selecionada
const confirmButton = document.querySelector('.btn-confirmar'); // Botão Confirmar
const modalDateElement = document.querySelector('.modal-date'); // Elemento para exibir a data no modal

// Atualizar calendário
const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

// Função para atualizar o calendário
const updateCalendar = () => {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const today = new Date(); // Data atual

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0); 
  const totalDays = lastDay.getDate(); 
  const firstDayIndex = firstDay.getDay(); 
  const lastDayIndex = lastDay.getDay(); 

  const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  monthYearElement.textContent = monthYearString;

  let datesHTML = '';

  // Gerar os dias do mês anterior
  for (let i = firstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, 1 - i);
    datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
  }

  // Gerar os dias do mês atual
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const activeClass = date.toDateString() === today.toDateString() ? 'active' : '';
    
    // Verificar se a data é anterior ao dia de hoje
    const disabledClass = date < today ? 'disabled' : '';

    datesHTML += `<div class="date active ${activeClass} ${disabledClass}" data-date="${date.toDateString()}">${i}</div>`;
  }

  // Gerar os dias do próximo mês
  for (let i = 1; i <= 6 - lastDayIndex; i++) {
    const nextDate = new Date(currentYear, currentMonth + 1, i);
    datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
  }

  datesElement.innerHTML = datesHTML;
};

// Evento para navegar entre os meses
prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

// Seleção de data no calendário
datesElement.addEventListener('click', (event) => {
  const selectedElement = event.target;

  // Verifica se o elemento é uma data ativa e não está desabilitada
  if (selectedElement.classList.contains('active') && !selectedElement.classList.contains('disabled')) {
    selectedDate = new Date(selectedElement.dataset.date); // Armazenar a data
    console.log('Data selecionada:', selectedDate);
    
    // Remover a seleção anterior e adicionar uma nova
    const selectedDates = document.querySelectorAll('.date.selected');
    selectedDates.forEach(d => d.classList.remove('selected'));
    
    selectedElement.classList.add('selected'); // Opcional: pode adicionar uma classe para destacar
  }
});

// Confirmar seleção de data
confirmButton.addEventListener('click', () => {
  if (selectedDate) {
    modalDateElement.textContent = `Você selecionou a data: ${selectedDate.toLocaleDateString()}`;
    $('#myModal').modal('show'); // Mostrar o modal com a data selecionada
  } else {
    alert('Por favor, selecione uma data primeiro.');
  }
});

// Inicializa o calendário ao carregar
updateCalendar();
