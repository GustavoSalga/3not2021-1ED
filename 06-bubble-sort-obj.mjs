let totTrocas, pass, comps // total trocas, passadas e comparações
    
 function bubbleSort(vetor, fnComp) 
{
     totTrocas = 0, pass = 0, comps = 0
     let trocas
do {
         trocas = 0 // Iniciando uma nova passada
         pass++ // contar quantas passadas tivemos

         // Percurso do vetor, da primeira até a PENÚLTIMA posição
         for(let i = 0; i <= vetor.length - 2; i++) 
         {
            //  if(vetor[i] > vetor [i + 1]) // { If do bubble sort de números
                if(fnComp(vetor[i], vetor[i+1]))
                {
            // Troca direta em JS via desestruturação de vetor
                 [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                 trocas++
                }
            comps++ // Toda vez que repete o IF ele faz uma nova comparação e vai acumulando
         }
        totTrocas += trocas // pega o trocas e adiciona em total de trocas para não zerar o valor no início da função
    } while (trocas > 0)
}

 import { candidatos } from './includes/candidatos-2018.mjs'

 console.log('Antes:', candidatos)
 console.time('Ordenando candidatos...')
 bubbleSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
 console.timeEnd('Ordenando candidatos...')
 console.log('DEPOIS:', candidatos)
 console.log({totTrocas, pass, comps})