// Função que eleva um número ao quadrado
// Se precisar disso em uma situação real, use Math.pow() ou o operador **

function quadrado(n) {
    return n * n
}
console.log(quadrado(9))

// Características da função acima:
// 1) Apenas um parâmetro
// 2) Apenas uma linha de código, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

console.log('-------------------')

// Transformando em arrow function
// a) Não precisa de parênteses envolvendo o marâmetro
// b) A palavra function é substituída pelo sinal =>, DEPOIS do parâmetro
// c) Não são necessárias as chaves nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))

// Função com mais de um parâmetro (CONVENCIONAL)
function potencia(b, e) {  // b = base e e = expoente
    return b ** e
}
console.log(potencia(2, 8))

// Função equivalente a de cima, no formato Arrow Function (ARROW FUNCTION)
// argumentos voltam a ser obrigatórios
let potencia2 = (b, e) => b ** e
console.log(potencia2(2, 8))

// Função sem parâmetro (CONVENCIONAL)
function megasena() {
    // Está função retorna um número aleatório entre 1 e 60
    // Math.random retorna um número aleatório decimal entre 0 (Inclusive) e 1 (Exclusive, no máximo 0,999999 e infinitamente)
    // * 60 -> Ajusta a faixa de valores para entre 0 e 59
    // +1 -> Ajusta a faixa de valores para e inclusive entre 1 e 60
    // Math.floor -. Arredonda para o menor inteiro (Tirar as cadas decimais do Math.Random)
    return Math.floor(Math.random() * 60 + 1)
}
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())

// Quando a função não tem argumentos, na arrow function é necessário deixar parênteses vazios para marcar seu lugar (ARROW FUNCTION)
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())

console.log('-----------------------------')

// Função com mais de uma linha no corpo (CONVENCIONAL)
function somaVet (vet) {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet([12, 42, -11, 20, 9, 16]))

// Quando a função tem mais de uma linha de código, na Arrow Function equivalente retornam as chaves
// e também a palavra return, caso ela retorne valor
const somaVet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}

// Conclusão: arrow functions foram concebidas para facilitar a escrita de funções de apenas uma linha,
// embora também possam ser usadas para funções de múltiplas linhas.