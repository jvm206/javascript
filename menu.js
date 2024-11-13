const ask = require('readline-sync')
// Função para obter um número válido
function obterNumero(mensagem) {
    let numero
    do {
        numero = Number(ask.question(mensagem))
    } while (isNaN(numero))
    return numero
}
let sustentaMenu = true
while (sustentaMenu) {
    console.log(`
    [1] - Calcular
    [0] - Sair
    `)
    let opcaoUsuario = Number(ask.question("Digite uma opcao: "))

    switch (opcaoUsuario) {
        case 1:
            let sustentaMenuCalcular = true
            while (sustentaMenuCalcular) {
                console.clear() // Limpa a tela antes de exibir o menu de cálculos
                console.log(`
    [1] - Somar
    [2] - Subtracao
    [3] - Multiplicacao
    [4] - Divisao
    [0] - Voltar
                `)

                let opcao = Number(ask.question("Digite a opcao desejada: "))
                if (opcao === 0) {
                    sustentaMenuCalcular = false // Volta ao menu principal
                    break
                }
                let numero1 = obterNumero("Digite o primeiro numero: ")
                let numero2 = obterNumero("Digite o segundo numero: ")
                switch (opcao) {
                    case 1:
                        console.log(`Resultado: ${numero1} + ${numero2} = ${numero1 + numero2}`)
                        break
                    case 2:
                        console.log(`Resultado: ${numero1} - ${numero2} = ${numero1 - numero2}`)
                        break
                    case 3:
                        console.log(`Resultado: ${numero1} * ${numero2} = ${numero1 * numero2}`)
                        break
                    case 4:
                        if (numero2 === 0) {
                            console.log("Erro: Não é possível dividir por zero!")
                        } else {
                            console.log(`Resultado: ${numero1} / ${numero2} = ${numero1 / numero2}`)
                        }
                        break
                    default:
                        console.log("Opcao invalida. Tente novamente.")
                }
                let fazerOutroCalculo = ask.question("Deseja fazer outro cálculo? (s/n): ")
                if (fazerOutroCalculo.toLowerCase() !== 's') {
                    sustentaMenuCalcular = false // Sai da sub-rotina de cálculo e volta ao menu principal
                }
            }
            break
        case 0:
            sustentaMenu = false // Sai do programa
            console.log("Saindo...")
            break
        default:
            console.log("Opcao invalida. Tente novamente.")
    }
}