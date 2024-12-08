var db_usuarios = {};
var usuarioCorrente = { "id": 3 , "login": "Gustavo", "senha": "123", "nome": "Gustavo Alves2", "email": "gustavo123@gmail.com"};
const dadosIniciais = {
    usuarios: [
        { "id": 1 , "nome": "Gustavo", "telefone": "(31)97676-7676", "sexo": "masculino", "email": "gustavo123@gmail.com", "senha": "12345"},
        { "id": 2 , "nome": "Paulo", "telefone": "(31)91313-1313", "sexo": "masculino", "email": "paulo123@gmail.com", "senha": "1234"},
        { "id": 3 , "nome": "Igor", "telefone": "(31)91111-1111", "sexo": "masculino", "email": "igorpb123@gmail.com", "senha": "123"},
    ]
};
var data = sessionStorage.getItem("usuarioCorrente");
console.log(data)
if (data === null){
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
}


