// Exercício 1: Declaração de Variáveis e Atribuição de Valores
// Crie uma variável chamada 'nome' e atribua a ela o seu nome.
// Em seguida, crie outra variável chamada 'idade' e atribua a ela a sua idade.
// Depois disso, utilize console.log para exibir uma mensagem que diga 
// "Meu nome é [nome] e eu tenho [idade] anos.".

let nome = "joão"
let idade = 15
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`)

// Exercício 2: Uso de Constantes e Alteração de Valores
// Crie uma constante chamada 'PI' e atribua a ela o valor de 3.14.
// Em seguida, crie uma variável chamada 'raio' e atribua a ela um valor inteiro que represente o raio de um círculo.
// Calcule a área do círculo usando a fórmula 'área = PI * raio * raio'.
// Exiba a área no console. Depois, altere o valor da variável 'raio' para um novo valor e repita o cálculo, exibindo a nova área.

const PI = 3.14
let raio = 14
let area = PI * raio * raio
console.log(`A área do círculo com raio ${raio} é: ${area}`)
raio = 10
area = PI * raio * raio
console.log(`A nova área do círculo com raio ${raio} é: ${area}`)

// Exercício 3: Manipulação de Strings
// Crie uma variável chamada 'mensagem' e atribua a ela uma frase de sua escolha.
// Em seguida, utilize os métodos .toUpperCase() e .toLowerCase() para exibir
// a mensagem em maiúsculas e em minúsculas, respectivamente.

let mensagem = "Olá, mundo!"
console.log(mensagem.toUpperCase())
console.log(mensagem.toLowerCase())

// Exercício 4: Substituição de Substrings
// Crie uma variável chamada 'texto' e atribua a ela a frase "Eu gosto de maçã.".
// Utilize algum método para substituir "maçã" por "banana" e exiba o resultado.

let texto = "Eu gosto de maçã."
let novoTexto = texto.replace("maçã", "banana")
console.log(novoTexto)

// Exercício 5: Divisão de Strings
// Crie uma variável chamada 'frase' e atribua a ela a frase "JavaScript é incrível!".
// Utilize algum método para dividir a frase em palavras e armazene o resultado em uma variável chamada 'palavras'.
// Exiba o array resultante.

let frase = "JavaScript é incrível!"
let palavras = frase.split(" ")
console.log(palavras)


// Exercício 6: Adição e Remoção de Elementos
// Crie um array chamado 'frutas' com pelo menos 3 frutas.
// Utilize o método .push() para adicionar uma nova fruta ao final do array
// e o método .pop() para remover a última fruta. Exiba o array após cada operação.

let frutas = ["maçã", "banana", "laranja"]
console.log("Array inicial:", frutas)
frutas.push("uva")
console.log("Após adicionar 'uva':", frutas)
frutas.pop()
console.log("Após remover a última fruta:", frutas)

// Exercício 7: Acesso a Elementos de um Array
// Crie um array chamado 'numeros' contendo os números de 1 a 5.
// Acesse o primeiro e o último elemento do array e exiba-os no console.

let numeros = [1, 2, 3, 4, 5]
let primeiroElemento = numeros[0]
let ultimoElemento = numeros[numeros.length - 1]
console.log("Primeiro elemento:", primeiroElemento)
console.log("Último elemento:", ultimoElemento)

// Exercício 8: Estrutura Condicional Simples
// Crie uma variável chamada 'idade' e atribua um valor inteiro.
// Utilize uma estrutura if para verificar se a pessoa é maior de idade (18 anos ou mais).
// Se for maior, exiba "Você é maior de idade." caso contrário, exiba "Você é menor de idade.".

let idade2 = 20
if (idade >= 18) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

// Exercício 9: Estrutura Condicional Composta
// Crie uma variável chamada 'nota' e atribua um valor entre 0 e 10.
// Utilize if, else if e else para verificar a nota:
// - Se a nota for 7 ou mais, exiba "Aprovado"
// - Se a nota for entre 5 e 6.9, exiba "Recuperação"
// - Se a nota for menor que 5, exiba "Reprovado".

let nota = 8
if (nota >= 7) {
    console.log("Aprovado")
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

// Exercício 10: Operadores Aritméticos com Condicionais
// Crie duas variáveis, 'a' e 'b', e atribua valores a elas.
// Calcule a soma e verifique se o resultado é par ou ímpar.
// Exiba no console o resultado da soma e se ele é "Par" ou "Ímpar".

let a = 5
let b = 7
let soma = a + b
let tipo = (soma % 2 === 0) ? "Par" : "Ímpar"
console.log(`A soma de ${a} e ${b} é ${soma}, que é ${tipo}.`)

// Exercício 11: Comparadores com Condicionais
// Crie duas variáveis, 'numero1' e 'numero2', e atribua valores a elas.
// Verifique se 'numero1' é maior, menor ou igual a 'numero2'.
// Exiba a mensagem correspondente no console.

let numero1 = 10
let numero2 = 15
if (numero1 > numero2) {
    console.log(`${numero1} é maior que ${numero2}.`)
} else if (numero1 < numero2) {
    console.log(`${numero1} é menor que ${numero2}.`)
} else {
    console.log(`${numero1} é igual a ${numero2}.`)
}

// Exercício 12: Cálculo de Média com Condicional
// Crie duas variáveis 'nota1' e 'nota2' e atribua valores a elas.
// Calcule a média e verifique se a média é maior ou igual a 7.
// Exiba "Aprovado" se a média for maior ou igual a 7, caso contrário exiba "Reprovado".

let nota1 = 8
let nota2 = 6
let media = (nota1 + nota2) / 2
if (media >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

// Exercício 13: Verificação de Idade e Salário
// Crie duas variáveis, 'idade' e 'salario'.
// A pessoa pode trabalhar se for maior ou igual a 16 anos e o salário deve ser maior que 1000.
// Exiba "Pode trabalhar." ou "Não pode trabalhar." dependendo da verificação.

let idade3 = 18
let salario = 1500

if (idade >= 16 && salario > 1000) {
    console.log("Pode trabalhar.")
} else {
    console.log("Não pode trabalhar.")
}

// Exercício 14: Função para Calcular a Média
// Crie uma função chamada 'calcularMedia' que recebe duas notas como parâmetros.
// A função deve retornar a média das notas.
// Após a definição da função, chame-a passando duas notas e exiba o resultado no console.

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2
}
let nota3 = 7.5
let nota4 = 8.5
let media2 = calcularMedia(nota1, nota2)
console.log("A média das notas é:", media)

// Exercício 15: Função para Verificar se um Número é Par ou Ímpar
// Crie uma função chamada 'verificarPar' que recebe um número como parâmetro.
// A função não deve retornar nada, mas deve exibir no console se o número é "Par" ou "Ímpar".
// Após a definição da função, chame-a passando um número.

function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("Par")
    } else {
        console.log("Ímpar")
    }
}
let numero = 7
verificarPar(numero)

// Exercício 16: Função para Calcular a Área de um Círculo
// Crie uma função chamada 'calcularAreaCirculo' que recebe o raio de um círculo como parâmetro.
// A função deve retornar a área do círculo utilizando a fórmula: área = PI * raio * raio.
// Você pode criar uma constante no valor de 3.14 para o valor de PI.
// Após a definição da função, chame-a passando um valor para o raio e exiba o resultado no console.

const PI2 = 3.14
function calcularAreaCirculo(raio) {
    return PI * raio * raio
}
let raio2 = 5
let area2 = calcularAreaCirculo(raio)
console.log("A área do círculo é:", area)