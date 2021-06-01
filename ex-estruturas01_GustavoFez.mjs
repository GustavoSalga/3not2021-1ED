/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

/************
 * Convertemos um número decimal para binário dividindo ele por 2, inserindo o resto no início da fila,
 * e por fim adicionamos o resultado final no início da fila.
 */

// Usarei o Deque pois consigo inserir no início da fila

import { Deque } from './lib/Deque.mjs'

let dec = 150 // Número decimal a ser convertido
const bin2dec = new Deque() // varíavel que usará o algoritmo deck e armazenará o número binario
let resto // resto da divisão por 2

if (dec === 0) { // Se o número for 0 o binario é ele mesmo
    console.log(`O binário de 0 é zero`)
}
else if (dec < 0) { // Se o número for menor do que 0, eu não sei fazer o binário dele =)
    console.log(`O número ${dec} é negativo e eu não sei transformar em Binário`)
}
// Em qualquer outro caso, ou seja, números positivos, calculamos o binário dividindo por 2 e adicionando
// o resto no início da fila.
else { 
    while (dec > 0) {
        resto = dec % 2 // Para transformar um decimal em binário, dividimos o número e o resto por 2
        dec = Math.floor(dec / 2) // Usaremos o Math.floor para arredondar para baixo para um número inteiro
        bin2dec.insertBack(resto) // Inserindo o resto no início da fila dentro da variável que retornará o número binário
    }
}
let binario = ''
while(! bin2dec.empty) {
        binario += bin2dec.removeBack()
}
console.log(binario)

// Encontrei essa função abaixo na internet e usei para verificar se o meu algoritmo acima dava o resultado
// correto. 
// Depois se você puder explicar a lógica por trás dela. Pelo que pesquisei o >>> faz a conversão para bits
// Ou algo assim. Acho que seria interessante para a sala.

// function dec2bin(dec){
//     return (dec >>> 0).toString(2);
// }
// console.log(dec2bin(6))