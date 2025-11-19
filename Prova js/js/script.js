const btnLogar = document.getElementById('btn-logar');
const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');

const modalLogin = document.getElementById('modal-login');
const modalBox = document.querySelector('.modal-box');
const btnAbrirModal = document.getElementById('btn-abrir-modal');
const btnFecharModal = document.querySelector('.btn-fechar-modal');

const btnExibirDados = document.getElementById('btn-exibir-dados');
const galeria = document.getElementById('minha-galeria');

const btnTheme = document.getElementById('btn-theme-toggle');
const iconTheme = btnTheme.querySelector('i');
const corpoDaPagina = document.body;

const formContato = document.getElementById('form-contato');

btnAbrirModal.addEventListener('click', () => {
    modalLogin.classList.add('active');
});

btnFecharModal.addEventListener('click', () => {
    modalLogin.classList.remove('active');
});

modalLogin.addEventListener('click', (e) => {
    if (e.target === modalLogin) {
        modalLogin.classList.remove('active');
    }
});

window.onload = function() {
    const usuarioSalvo = localStorage.getItem('ultimoUsuario');
    if (usuarioSalvo) {
        inputUsuario.value = usuarioSalvo;
    }
}

btnLogar.addEventListener('click', function() {
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    if (usuario === "Maria" && senha === "01012000") {
        alert("Bem-vindo(a) de volta, " + usuario + "!");
        
        localStorage.setItem('ultimoUsuario', usuario);
        
        modalLogin.classList.remove('active');
        
        modalBox.classList.remove('shake');
        inputSenha.style.borderColor = "#ddd";
        
    } else {
        modalBox.classList.add('shake');
        inputSenha.style.borderColor = "red";

        setTimeout(() => {
            modalBox.classList.remove('shake');
        }, 500);
    }
});

btnExibirDados.addEventListener('click', function() {
    const icones = ['fa-code', 'fa-laptop-code', 'fa-mobile-alt', 'fa-database'];
    const titulos = ['API Rest', 'App Mobile', 'Banco de Dados', 'Dashboard'];

    const div = document.createElement('div');
    div.className = 'project-card';
    
    const randomIcon = icones[Math.floor(Math.random() * icones.length)];
    const randomTitle = titulos[Math.floor(Math.random() * titulos.length)];

    div.innerHTML = `
        <div class="card-icon"><i class="fas ${randomIcon}"></i></div>
        <h3>${randomTitle}</h3>
        <p>Novo projeto adicionado dinamicamente.</p>
    `;

    div.style.opacity = 0;
    galeria.appendChild(div);
    setTimeout(() => div.style.opacity = 1, 100);
});

btnTheme.addEventListener('click', function() {
    corpoDaPagina.classList.toggle('dark-mode');
    
    if (corpoDaPagina.classList.contains('dark-mode')) {
        iconTheme.classList.remove('fa-moon');
        iconTheme.classList.add('fa-sun'); 
    } else {
        iconTheme.classList.remove('fa-sun');
        iconTheme.classList.add('fa-moon');
    }
});

if(formContato) {
    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const nome = document.getElementById('nome-contato').value;
        const email = document.getElementById('email-contato').value;

        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\nEntraremos em contato pelo email: ${email}`);
        formContato.reset();
    });
}