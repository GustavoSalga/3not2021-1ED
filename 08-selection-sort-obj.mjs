let trocas, pass, comps // variáveis para contar trocas, passadas e comparações


// Função de comparação (fnComp) retorna true caso o PRIMEIRO objeto seja MAIOR que o segunda
function selectionSort(vetor, fnComp) {
trocas = 0, pass = 0, comps = 0 // zeramos as variáveis para começar a contar
    function encontrarMenor(inicio) { // Recebe a posição inicial, essa função é a de comparação
      let menor = inicio
      // Este loop vai até o final
      for (let j = inicio + 1; j < vetor.length; j++){
        // if(vetor[j] < vetor[menor]) menor = j essa é a escrita para números, agora em objetos é escrito abaixo
        // Na passagem para fnComp, a ordem dos objetos precisa ser invertida
        if(fnComp(vetor[menor], vetor[j])) menor = j
        comps++
      }
    return menor
    } 
    // Percurso do vetor até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        pass++
        let menor = encontrarMenor(i + 1) 

        // if(vetor[menor] < vetor[i]) {
        // Na passagem para fnComp, a ordem dos objetos precisa ser invertida
        if(fnComp(vetor[i], vetor[menor])) {
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ]
            trocas++
        }
    comps++
    }
    
}

import { candidatos } from './includes/candidatos-2018.mjs'

console.log('Antes:', candidatos)
console.time('Ordenando candidatos...')
selectionSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
console.log({trocas, pass, comps})