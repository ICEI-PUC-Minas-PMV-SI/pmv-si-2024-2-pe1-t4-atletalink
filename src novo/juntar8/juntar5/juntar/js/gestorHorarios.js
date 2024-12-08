const nomeQuadra = new URLSearchParams(window.location.search).get("idQuadra");
document.querySelector(".nomeQuadra").innerHTML = `Locação ${
  nomeQuadra ? `- ${nomeQuadra}` : ""
}`;

const agendamentos = [
  {
    nomeQuadra: "sdafa",
    dia: "26/11/2024",
    horario: "15:00",
    nome: "João",
    status: "Confirmado",
  },
  {
    nomeQuadra: "Quadra 123",
    dia: "27/11/2024",
    horario: "15:00",
    nome: "Fernando",
    status: "Pendente",
  },
  {
    nomeQuadra: "Quadra 123",
    dia: "28/11/2024",
    horario: "15:00",
    nome: "Maria",
    status: "Confirmado",
  },
  {
    nomeQuadra: "Quadra 123",
    dia: "29/11/2024",
    horario: "15:00",
    nome: "Lucia",
    status: "Pendente",
  },
];

const agendamentosFiltrados = agendamentos.filter((agendamento) =>
  nomeQuadra ? agendamento.nomeQuadra === nomeQuadra : true
);

const body = document.querySelector("table tbody");

agendamentosFiltrados.forEach((agendamento) => {
  const classe = agendamento.status == "Confirmado" ? "verde" : "vermelho";

  body.innerHTML += `
            <tr>
                <td>${agendamento.nomeQuadra}</td>
                <td>${agendamento.dia}</td>
                <td>${agendamento.horario}</td>
                <td>${agendamento.nome}</td>
                <td class="${classe}">${agendamento.status}</td>
            </tr>
        `;
});
