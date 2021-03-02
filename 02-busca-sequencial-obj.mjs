/* function buscaSequencial(vetor, valorBusca, fnComp){ // o terceiro parâmetro fnComp é a função de comparação
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

 /* const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca // Arrow function da função comentada acima
 const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca // 

 import { objNomes } from './includes/vetor-obj-nomes.mjs'
 console.time('FAUSTO')
 console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome))
 console.timeEnd('FAUSTO')
  console.time('MARIA')
 console.log(buscaSequencial(objNomes, 'MARIA', comparaGrupo))
 console.timeEnd('MARIA')

 console.log('------------------') 

 // A forma acima está correta, mas a forma abaixo é melhor, onde eu não preciso mais do
 // const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

 console.log(buscaSequencial(objNomes, 'FAUSTO', (objNomes, valorBusca) => objNomes.first_name === valorBusca ))
 console.log(buscaSequencial(objNomes, 'MARIA', (objNomes, valorBusca) => objNomes.group_name === valorBusca ))

 console.log('----------------') */

 // Tirando o valorBusca da função, é melhor ainda que a forma acima, e nos permite fazer várias buscas mantendo a função base

 import { objNomes } from './includes/vetor-obj-nomes.mjs'

 function buscaSequencial (vetor, fnComp){ // o terceiro parâmetro fnComp é a função de comparação
     for(let i = 0; i < vetor.length; i++) { // Percorrendo o vetor
        if(fnComp(vetor[i])) return i
     }
     return -1 // valor de busca não encontrado
 }

 console.log(buscaSequencial (objNomes, objNomes => objNomes.first_name === 'FAUSTO' ))
 console.log(buscaSequencial(objNomes, objNomes => objNomes.group_name === 'MARIA' ))

 console.log('----------------')
 // Primeiro nome da lista que tem mais de 1000 pessoas registradas com ele
 let pos = buscaSequencial(objNomes, objNomes => objNomes.frequency_total > 1000)
 console.log(objNomes[pos])

 console.log('----------------')
 // Primeiro nome masculino da lista com mais de 10000 registrados
    pos = buscaSequencial(objNomes, objNomes => objNomes.frequency_total > 10000 && objNomes.classification === 'M')
 console.log(objNomes[pos])

 console.log('----------------')