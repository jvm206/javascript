const ask = require('readline-sync')
let sustentaMenu = true
while (sustentaMenu) {
    console.clear()
    console.log(`
[1] - adicao
[2] - subtracao
[3] - divisao
[4] - multiplicacao
[0] - Sair
    `)
    let opcaoUsuario1 = Number(ask.question("Digite uma opcao: "))
    let primeiroNumero = Number(ask.question("primeiroNumero: "))
    let segundoNumero = Number(ask.question("segundoNumero: "))
    console.clear()
    switch (opcaoUsuario1) {
        case 1:
            console.log(adicao(primeiroNumero,segundoNumero))
            break
        case 2:
            console.log(subtracao(primeiroNumero, segundoNumero))
            break
        case 3:
            console.log(divisao(primeiroNumero, segundoNumero))
            break
        case 4:
            console.log(multiplicacao(primeiroNumero, segundoNumero))
            break
        case 0:
            sustentaMenu = false
            break
        default:
            console.log('Opcao invalida, tente novamente')
            break
    }
    ask.question("Tecle ENTER para continuar...")
}
function adicao(num1, num2){
    return num1 + num2
}
function subtracao(num1, num2){
    return num1 - num2
}
function divisao(num1, num2){
    return num1 / num2
}
function multiplicacao(num1, num2){
    return num1 * num2
}