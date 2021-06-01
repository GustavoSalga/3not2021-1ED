/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'

const palindromo = 'Amor a Roma.' // O ponto final no palíndromo serve para verificarmos se o algoritmo funciona
let deque = new Deque()

for(let i = 0; i < palindromo.length; i++) { // Fazemos um for para percorrer letra por letra do palíndromo
    // Fazemos a inserção de letra por letra usando a posição do i como referência e inserindo no início (Front)
    deque.insertFront(palindromo.charAt(i)) 
}
// console.log(deque.print())  // printamos o vetor verificando que o palíndromo já foi invertido 

let textoRev = '' // declaramos a variável texto reverso
while(! deque.empty) { // o símbolo "!" significa NOT, no caso enquanto a pilha não estiver vazia, o while continua removendo
    textoRev += deque.removeFront() // começamos a remover letra por letra do ínicio (Front)
}
console.log(textoRev) // printamos o texto invertido