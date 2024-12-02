// Selecionar todas as datas
const dates = document.querySelectorAll('.dates .date');

// Adicionar evento de clique em cada data
dates.forEach(date => {
  date.addEventListener('click', () => {
    const selectedDate = date.textContent;
    console.log('Data selecionada:', selectedDate);

    // Abrir o modal e preencher com a data selecionada
    const modal = document.getElementById('myModal');
    const modalDate = modal.querySelector('.modal-date');
    modalDate.textContent = selectedDate;
    modal.style.display = 'block';
  });
});

// Função para fechar o modal (opcional)
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}