
// Só é possível fazer essa busca binária, neste caso, pelo first_name por estar em ordem alfabética (sequencial),
// qualquer outro parâmetro de busca não funciona por não estar ordenado
let comps

 function buscaBinaria(vetor, fnComp) {
     comps = 0
     let ini = 0 // ini = início
     let fim = vetor.length -1
     let meio
     while(fim >= ini) {
        meio = Math.floor((fim + ini) / 2) // Math.floor () arredonda para baixo
        switch(fnComp(vetor[meio])) {
            case 0: // Achou o valor
                comps++
                return meio
        // break não é necessário aqui pois se ele encontrar o valor a função se encerra de toda forma, impossível passar para os cases de baixo
            case 1:
                comps += 2
                ini = meio + 1
            break
            default:
                comps += 2
                fim = meio -1
            }
        }
        return -1 // Não existe
    }
 // A função de comparação para a busca binária precisa retornar um de três valores: (estamos comparando o valor da tabela ASCII para cada objeto)
 // retorno 0: o valor de busca e o valor no objeto são IGUAIS
 // retorno -1: o valor de busca é MENOR que o valor no objeto
 // retorno 1: o valor de busca é MAIOR que o valor no objeto

 const comparaNome = (obj, busca = 'FAUSTO') => { // essa função só foi criada para mostrar o formato, mas é usada individualmente em cada console log abaixo
     if( busca === obj.first_name) return 0
     else if( busca < obj.first_name) return -1
     else return 1
 }

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('BUSCANDO LAMARA')
 console.log(buscaBinaria(objNomes, (obj, busca = 'LAMARA') => {
     if( busca === obj.first_name) return 0
     else if( busca < obj.first_name) return -1
     else return 1
 }), {comps})
 console.timeEnd('BUSCANDO LAMARA')

 console.time('BUSCANDO ZOZIMO')
 console.log(buscaBinaria(objNomes, (obj, busca = 'ZOZIMO') => {
     if( busca === obj.first_name) return 0
     else if( busca < obj.first_name) return -1
     else return 1
 }), {comps})
 console.timeEnd('BUSCANDO ZOZIMO')

 console.time('BUSCANDO ORKUTILSON')
 console.log(buscaBinaria(objNomes, (obj, busca = 'ORKUTILSON') => {
     if( busca === obj.first_name) return 0
     else if( busca < obj.first_name) return -1
     else return 1
 }), {comps})
 console.timeEnd('BUSCANDO ORKUTILSON')