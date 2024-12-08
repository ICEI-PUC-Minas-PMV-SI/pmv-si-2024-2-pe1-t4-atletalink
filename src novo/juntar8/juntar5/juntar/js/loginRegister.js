
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


// Seleção de botões e elementos do formulário
document.querySelector('.btn.btn-second').addEventListener('click', registerUser);
document.querySelector('.btn.btn-primary').addEventListener('click', toggleContent);

// Função para alternar entre os conteúdos (registro e login)
function toggleContent() {
    document.querySelector('.first-content').classList.toggle('hide');
    document.querySelector('.second-content').classList.toggle('hide');
}

// Função para registrar usuário
function registerUser(event) {
    event.preventDefault(); // Evita o reload da página

    // Capturando os valores do formulário de registro
    const fullName = document.querySelector('.second-column .form input[placeholder="Nome Completo"]').value;
    const phone = document.querySelector('.second-column .form input[placeholder="Telefone"]').value;
    const email = document.querySelector('.second-column .form input[placeholder="Email"]').value;
    const birthDate = document.querySelector('.second-column .form input[placeholder="Data de Nascimento"]').value;
    const password = document.querySelector('.second-column .form input[placeholder="Senha"]').value;

    // Validação básica para verificar se todos os campos estão preenchidos
    if (!fullName || !phone || !email || !birthDate || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Criando objeto de usuário
    const newUser = {
        fullName,
        phone,
        email,
        birthDate,
        password
    };

    // Recupera usuários existentes ou inicializa como vazio
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o email já está registrado
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Este email já está registrado. Por favor, use outro.');
        return;
    }

    // Adiciona novo usuário ao array e atualiza `localStorage`
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro bem-sucedido! Você pode agora fazer login.');

    // Alterna para a tela de login
    toggleContent();
}

// Função para realizar login
document.querySelector('.second-content .btn.btn-second').addEventListener('click', loginUser);

function loginUser(event) {
    event.preventDefault(); // Evita o reload da página

    // Captura os valores do formulário de login
    const email = document.querySelector('.second-content .form input[placeholder="Email"]').value;
    const password = document.querySelector('.second-content .form input[placeholder="Senha"]').value;

    // Recupera os usuários do `localStorage`
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se as credenciais estão corretas
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert(`Bem-vindo, ${validUser.fullName}!`);
        window.location.href='hub.html'
        // Aqui você pode adicionar lógica de redirecionamento ou abertura de nova sessão
    } else {
        alert('Email ou senha inválidos. Por favor, tente novamente.');
    }
}

// Seleção de elementos do modal
var modal = document.getElementById("resetPasswordModal");
var btnClose = document.querySelector(".close");
var btnResetPassword = document.querySelector('.password');

btnResetPassword.addEventListener("click", function(event) {
    console.log('Clique no botão "Esqueceu sua senha?"');
    event.preventDefault();
    modal.style.display = "flex"; // Mostra o modal
});


// Fecha o modal quando o usuário clica no "X"
btnClose.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Lógica para redefinir a senha
document.getElementById("resetPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const email = document.querySelector('.reset-email').value;
    const newPassword = document.querySelector('.new-password').value;
    const messageElement = document.querySelector('.message');

    // Recupera os usuários do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o email está registrado
    const user = users.find(user => user.email === email);

    if (!user) {
        messageElement.textContent = 'Email não registrado.';
        messageElement.classList.remove('success');
        messageElement.classList.add('error');
        return;
    }

    // Atualiza a senha do usuário
    user.password = newPassword;

    // Salva a atualização no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    messageElement.textContent = 'Senha redefinida com sucesso!';
    messageElement.classList.remove('error');
    messageElement.classList.add('success');

    // Após alguns segundos, fecha o modal
    setTimeout(() => {
        modal.style.display = "none";
    }, 2000);
});

