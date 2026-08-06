const defaultEmail = 't@teste.com';
const defaultSenha = 'pass1234';
const defaultUsername = 'Teste';

function toggleView(element) {
    const containerLogin = document.querySelector('.container-login');
    const containerCadastro= document.querySelector('.container-cadastro');

    if (containerLogin.contains(element)) {
        containerLogin.classList.remove('active');
        containerCadastro.classList.add('active');
        containerCadastro.style.animation = 'toRight 1s -0.3s cubic-bezier(0, 1.5, 1, 0.9) normal forwards'
    } else {
        containerCadastro.classList.remove('active');
        containerLogin.classList.add('active');
        containerLogin.style.animation = 'toLeft 1s -0.3s cubic-bezier(0, 1.5, 1, 0.9) normal forwards'
    }
}

function validarCredenciais(email, senha) {
    if (email === defaultEmail && senha === defaultSenha) {
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
}

function validarCamposVazios(form) {
    const elements = form.querySelectorAll('.input-field');
    let camposVazios = false;

    elements.forEach((element) => {
        if (element.value.trim() === '' || element.checked === false) {
            element.classList.add('error');
            let labelText = element.labels[0].innerHTML;
            if (!labelText.includes('<span style="color: red;"> (*)</span>')) {
                element.labels[0].innerHTML += '<span style="color: red;"> (*)</span>';
            }
            camposVazios = true;
        } else {
            element.classList.remove('error');
            element.labels[0].innerHTML = element.labels[0].innerHTML.replace('<span style="color: red;"> (*)</span>', '');
        }
    });

    return camposVazios;
}

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view');
    if (viewParam === 'cadastro') {
        toggleView(document.querySelector('#btn-cadastro'));
    }
});

const formLogin = document.querySelector('#form-login');
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validarCamposVazios(formLogin)) {
        return;
    }

    const email = formLogin.querySelector('#login-email').value;
    const senha = formLogin.querySelector('#senha').value;

    validarCredenciais(email, senha);
})

formLogin.addEventListener('input', (e) => {
    if (e.target.classList.contains('error')) {
        validarCamposVazios(formLogin);
    }
});

const formCadastro = document.querySelector('#form-cadastro');
formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validarCamposVazios(formCadastro)) {
        return;
    }
})

formCadastro.addEventListener('input', (e) => {
    if (e.target.classList.contains('error')) {
        validarCamposVazios(formCadastro);
    }
});