const form = document.querySelector('form')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)

    async function getLatLon(rua, cidade, estado, pais) {
        // Função para gerar a URL
        const generateNominatimURL = (rua, cidade, estado, pais) => {
            const formatar = (texto) => encodeURIComponent(texto.trim());
            const urlBase = "https://nominatim.openstreetmap.org/search";
            const query = `${formatar(rua)}, ${formatar(cidade)}, ${formatar(estado)}, ${formatar(pais)}`;
            return `${urlBase}?q=${query}&format=json`;
        };
    
        // Gerar URL
        const url = generateNominatimURL(rua, cidade, estado, pais);
    
        try {
            // Fazer a requisição à API
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
    
            // Converter a resposta para JSON
            const data = await response.json();
    
            // Verificar se há resultados
            if (data.length === 0) {
                throw new Error("Endereço não encontrado");
            }
    
            // Retornar latitude e longitude do primeiro resultado
            const { lat, lon } = data[0];
            return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
        } catch (error) {
            console.error("Erro ao buscar latitude e longitude:", error.message);
            return null;
        }
    }
    

    (async () => {
        const rua = "Rua Pitágoras 113";
        const cidade = "Contagem";
        const estado = "Minas Gerais";
        const pais = "Brasil";
    
        const coords = await getLatLon(rua, cidade, estado, pais);
        console.log("Coordenadas:", coords);
        let data = Object.fromEntries(formData.entries())

        if(coords?.latitude && coords.longitude){
            data.latitude = coords?.latitude;
            data.longitude = coords?.longitude;
        }


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



    })();



})