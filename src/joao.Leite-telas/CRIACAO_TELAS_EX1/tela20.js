const agendamentos = [
    {
        nomeQuadra: 'Quadra 123',
        dia: '26/11/2024',
        horario: '15:00',
        nome: 'João',
        status: 'Confirmado'
    },
    {
        nomeQuadra: 'Quadra 123',
        dia: '27/11/2024',
        horario: '15:00',
        nome: 'Fernando',
        status: 'Pendente'
    },
    {
        nomeQuadra: 'Quadra 123',
        dia: '28/11/2024',
        horario: '15:00',
        nome: 'Maria',
        status: 'Confirmado'
    },
    {
        nomeQuadra: 'Quadra 123',
        dia: '29/11/2024',
        horario: '15:00',
        nome: 'Lucia',
        status: 'Pendente'
    },

]

const body = document.querySelector('table tbody')

agendamentos.forEach(agendamento => {
    const classe = agendamento.status == 'Confirmado' ? 'verde' : 'vermelho'

    body.innerHTML +=
        `
            <tr>
                <td>${agendamento.nomeQuadra}</td>
                <td>${agendamento.dia}</td>
                <td>${agendamento.horario}</td>
                <td>${agendamento.nome}</td>
                <td class="${classe}">${agendamento.status}</td>
            </tr>
        `
})

