const form = document.querySelector('form')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    if (!localStorage.getItem('Cadastramento')) {
        localStorage.setItem('Cadastramento', JSON.stringify([data]))
    }
    else {
        const itens = JSON.parse(localStorage.getItem('Cadastramento'))
        itens.push(data)
        localStorage.setItem('Cadastramento', JSON.stringify(itens))
    }

    alert('Salvo com sucesso!')
    form.reset()
})