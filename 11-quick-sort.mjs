/************
 * QUICK SORT
 * Escolhe um dos elementos do vetor para ser o pivô (na nossa implementação, o último elemento) e, na primeira
 * passada, divide o vetor, a partir da posição final do vetor, em um subvetor à esquerda contendo apenas valores
 * menores que o pivô e outro subvetor à direita, que contém apenas valores maiores que o pivô.
 * 
 * Em seguida, recursivamente, repete o processo em cada um dos subvetores até que todo o vetor esteja ordenado
 */

let totTrocas, pass, comps // total trocas, passadas e comparações
    
 function quickSort(vetor, ini = 0, fim = vetor.length - 1) {
     if(fim > ini) { // Condição de saída da recursividade. Tudo abaixo só vai ser feito se o fim for maior que o ini
        pass++ // sempre que começar o quick novamente é uma passada a mais
    const pivot = fim
    let div = ini - 1
    // Loop for vai até a PENÚLTIMA posição
    for(let i = ini; i < fim; i++) {
        if(vetor[i] < vetor[pivot]) { // quando o elemento da posição i for menor que o elemento da posição pivot
            comps++ // pelo simples fato de entrar no if temos uma comparação
            div++ // avançamos com o marcador div (do diagrama)
            if( i !== div) { // Em alguns casos o i vai estar no mesmo lugar do div, então aqui verificamos se é diferente e fazemos a troca abaixo
                [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ] // Fazemos a troca de posição entre os elementos
                totTrocas++
            } 
        }
    }
    div++
    if(vetor[pivot] < vetor[div]){ // Se o elemento da posição pivot for menor que o elemento da posição div
        [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ] // Fazemos a troca de posição entre os elementos
        totTrocas++
    }
    comps++

    // Ordena o subvetor a esquerda do pivô
    quickSort(vetor, ini, div - 1)

    // Ordena o subvetor a direita do pivô
    quickSort(vetor, div + 1, fim)
    }
 }

totTrocas = 0, pass = 0, comps = 0
// let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
// let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
quickSort(nums)
console.log(nums)
console.log({totTrocas, comps, pass})

import { nomes } from './includes/100-mil-nomes.mjs'

totTrocas = 0, pass = 0, comps = 0
console.time('Ordenando nomes...')
quickSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('DEPOIS:', nomes)
console.log({totTrocas, comps, pass, memoria})