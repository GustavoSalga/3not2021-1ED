function buscaSequencial(vetor, valorBusca, fnComp){ // o terceiro parâmetro fnComp é a função de comparação
     for(let i = 0; i < vetor.length; i++) { // Percorrendo o vetor
        // Ao invés de fazer a comparação dentro da função de busca, "terceirizamos" essa comparação chamando uma função externa
        if(fnComp(vetor[i], valorBusca)) return i  // Se o valor de busca for encontrado, retornar a posição
     }
     return -1 // valor de busca não encontrado
 }

console.log ('------------')
 /* function comparaNome(onjNome, valorBusca){
     return objNome.first_name === valorBusca
 } */

 const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca // Arrow function da função comentada acima

 import { objNomes } from './includes/vetor-obj-nomes.mjs'
console.time('FAUSTO')
 console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome))
 console.timeEnd('FAUSTO')