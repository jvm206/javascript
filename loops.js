// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço `while`.

function somaAteN(n) {
    let soma = 0
    let i = 1
    while (i <= n) {
      soma += i
      i++
    }
    return soma
  }
  console.log(somaAteN(5))

// Exemplo de chamada:
// console.log(somaAteNumero(5));  // 15 (1+2+3+4+5)

// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.

function somaMaiorQueDez(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 10) {
        soma += array[i]
      }
    }
    return soma
  }  
  const numeros = [5, 12, 8, 21, 15, 3]
  console.log(somaMaiorQueDez([5, 15, 3, 20, 7]))

// Exemplo de chamada:
// console.log(somaMaiorQueDez([5, 15, 3, 20, 7]));  // 35 (15 + 20)

// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.

function filmeComMaisDeCincoLetras(filmes) {
    if (filme.length > 5) {
      return filme
    }
  }
  return null
const filmes = ['Vingadores', 'Thor', 'Batman', 'O Rei Leão', 'Frozen'];
const resultado = filmeComMaisDeCincoLetras(filmes)
console.log(resultado)

// Exemplo de chamada:
// console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]));  // "Avengers"

// 4. Crie uma função que receba um array de nomes de personagens de *Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array de números representando a força de cada personagem, respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço `for`.

function personagensFortes(nomes, forcas) {
  let personagensFortes = []
  for (let i = 0; i < nomes.length; i++) {
      if (forças[i] > 150) {
          personagensFortes.push(nomes[i])
      }
  }
  return personagensFortes
}
const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"]
const forças = [180, 195, 140]
console.log(personagensFortes(nomes,forças))

// Exemplo de chamada:
//const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
//const forcas = [80, 95, 40];

//console.log(personagemComForcaSuperiorA100(nomes, forcas));  


// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.

function contarNegativos(numeros) {
  let count = 0
  let i = 0
  while (i < numeros.length) {
    if (numeros[i] < 0) {
      count++
    }
    i++
  }
  return count
}
const numeros2 = [[3, -2, -5, 7, 0, -1]]
const resultados = contarNegativos(numeros)
console.log(contarNegativos([3, -2, -5, 7, 0, -1]))


// Exemplo de chamada:
// console.log(contarNegativos([3, -2, -5, 7, 0, -1]));  // 3

// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.

function contarLetraA(){
  const array = ('')
  const cont = (char => char.toLowerCase() === 'a').length
  return cont
}
console.log(contarLetraA("Naruto é um anime top!"))

// Exemplo de chamada:
// console.log(contarLetraA("Naruto é um anime top!"));  // 4

// 7.  Crie uma função que percorra um array de filmes e retorne um novo array com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.

function filmesComLetraS(filmes) {
  const resultado = []
  for (const filme of filmes) {
    if (filme[0].toUpperCase() === 'S') { 
      resultado.push(filme)
    }
  }
  return resultado
}
console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]))
// Exemplo de chamada:
// console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  // ["Star Wars", "Superman", "Shrek"]

// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.

function maiorSubstring(arr) {
  let maior = ""
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maior.length) {
      maior = arr[i]
    }
  }
  return maior
}
console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  // "Alexandre"

// Exemplo de chamada:
// console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  // "Alexandre"

// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.

function fatorial(n) {
  let resultado = 1
  for (let i = 1; i <= n; i++) {
    resultado *= i
  }
  return resultado
}
console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

// Exemplo de chamada:
// console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.

function repetirNumero(numero, vezes) {
  let resultado = ''
  let contador = 0
  while (contador < vezes) {
        if (contador > 0) {
      resultado += ', '
    }
    resultado += numero;
    contador++;
  }
  return resultado
}
console.log(repetirNumero(7, 4))

// Exemplo de chamada:
// console.log(repetirNumero(7, 4));  // "7, 7, 7, 7"