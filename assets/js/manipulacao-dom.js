const mainPage = document.querySelector('.main-page');

const botao = document.createElement('button');
botao.id = "botaoManipulacao";
botao.type = "button";
botao.innerText = "Botão Para Manipular Página";

mainPage.append(botao);

const botaoManipulacao = document.querySelector('#botaoManipulacao');

botaoManipulacao.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);

    alert("Botão pressionado!");

    const promptMsg = prompt("Digite seu nome: ");
    const nomeElement = document.createElement('p');
    nomeElement.id = "nomeDigitado";
    nomeElement.innerText = `Seja Bem-Vindo, ${promptMsg}!`;

    mainPage.append(nomeElement)

    const tempoTela = setInterval(() => {
        const timeElement = document.querySelector("#tempoTela") || document.createElement('p')
        timeElement.id = "tempoTela";
        timeElement.innerHTML = `Data e hora atual: ${new Date().toLocaleString()}`

        if(!mainPage.contains(timeElement))
            mainPage.append(timeElement)
    }, 1*1000)

    setTimeout(() => {
        clearInterval(tempoTela);
    }, 10*1000)
})
