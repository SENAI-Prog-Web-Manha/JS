print("Olá mundo!") // Clássico Hello World
print(2+3)

// console.log("1" + "1")
// console.log(1 + "1")
// console.log(1 + 1)
// console.log(1 - 1)
// console.log(1 - "1")
// console.log("1" - "1")

// class Aluno {
//     constructor(nome, idade, cidade) {
//         this.nome = nome
//         this.idade = idade
//         this.cidade = cidade
//     }
// }

// var nomeAluno = "João" // Declaração de variável obsoleta
// let idadeAluno = 17 // Declaração de variável moderna
// const cidadeAluno = "São Paulo" // Declaração de constante (valor imutável)
// nomeLinguagem = "JavaScript" // Declaração de variável de forma global, mas sem palavra-chave (não recomendado)

// console.log(nomeAluno);
// console.log(idadeAluno);
// console.log(cidadeAluno);
// console.log(nomeLinguagem);

// const podeDirigir = (idade) => {
//     return idade >= 18 ? true : false;
// }

// const dadosAluno = {
//     nome: "João",
//     idade: 17,
//     cidade: "São Paulo",
//     podeDirigir: podeDirigir(this.idade)
// }

// console.log(dadosAluno);

// console.log("O aluno " + dadosAluno.nome + " tem " + dadosAluno.idade + " anos e mora em " + dadosAluno.cidade + ".")
// console.log(`O aluno ${dadosAluno.nome} tem ${dadosAluno.idade} anos e mora em ${dadosAluno.cidade}.`)

// let valor_a = 10
// let valor_b = 30.756

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// console.log("Soma: " + (valor_a + valor_b)) // Soma
// console.log("Subtração: " + (valor_a - valor_b)) // Subtração
// console.log("Multiplicação: " + (valor_a * valor_b)) // Multiplicação
// console.log("Divisão: " + (valor_a / valor_b)) // Divisão
// console.log("Resto da divisão: " + (valor_a % valor_b)) // Resto da divisão
// console.log("Divisão (truncada): " + Math.trunc(valor_a / valor_b)) // Divisão
// console.log("Exponenciação: " + Math.pow(valor_a, valor_b)) // Exponenciação

// console.log(Number(nomeAluno))
// console.log(isNaN(idadeAluno))
// console.log(String(idadeAluno))
// console.log(Boolean(idadeAluno))
// console.log(typeof nomeAluno)

// dadosAluno.nome = "Maria"
// dadosAluno.idade = 20

// if (dadosAluno.idade >= 16 && dadosAluno.idade < 18) {
//     console.log(`A aluna ${dadosAluno.nome} tem ${dadosAluno.idade} anos e pode votar, mas não pode dirigir.`)
// } else if (dadosAluno.idade >= 18) {
//     console.log(`A aluna ${dadosAluno.nome} tem ${dadosAluno.idade} anos, deve votar, e pode dirigir.`)
// } else {
//     console.log(`A aluna ${dadosAluno.nome} tem ${dadosAluno.idade} anos e não pode votar nem dirigir.`)
// }

// function montarPredio() {
//     let predio = []
//     let cabecalhoTabela = ["Andar", "Apartamentos"]
//     const quantidadeAndares = 10
//     const quantidadeApartamentos = 5

//     for (let andar = 1; andar <= quantidadeAndares; andar++) {
//         predio.push([])
//         for (let apartamento = 1; apartamento <= quantidadeApartamentos; apartamento++) {
//             if (apartamento > 9){
//                 predio[andar-1].push(Number(`${apartamento}${andar}`))
//             } else {
//                 predio[andar-1].push(Number(`${apartamento}0${andar}`))
//             }

//             if (apartamento > 1){
//                 cabecalhoTabela.push("")
//             }
//         }
//     }

//     console.clear()
//     console.log("Olympo Edifícios")
//     console.table(predio)
// }

// setTimeout(() => {
//     console.log("Bem-vindo ao sistema do Smart Control!")

//     while (true) {
//         let opcao = prompt("Escolha uma opção:\n1 - Montar prédio\n2 - Novo Aluno\n3 - Sair")

//         if (opcao === "3" || opcao === null) {
//             console.log("Saindo...")
//             break;
//         }

//         switch (opcao) {
//             case "1":
//                 montarPredio()
//                 break;
//             case "2":
//                 let nomeNovoAluno = prompt("Digite o nome do aluno:")
//                 let idadeNovoAluno = prompt("Digite a idade do aluno:")
//                 let cidadeNovoAluno = prompt("Digite a cidade do aluno:")
//                 console.log(new Aluno(nomeNovoAluno, idadeNovoAluno, cidadeNovoAluno))
//                 break;
//             default:
//                 console.log("Opção inválida!")
//                 break;
//         }
//     }
// }, 3*1000)

// setInterval(() => {
//     let bemVindoElement = document.getElementById("bem-vindo")
//     bemVindoElement.innerHTML = `Bem-vindo ao sistema do Smart Control<br>Data e hora atual: ${new Date().toLocaleString()}`
// }, 1*1000)
