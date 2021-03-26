let totTrocas, pass, comps // total trocas, passadas e comparações
    
 function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) 
{
     if(fim > ini) 
    { // Condição de saída da recursividade. Tudo abaixo só vai ser feito se o fim for maior que o ini
        pass++ // sempre que começar o quick novamente é uma passada a mais
    const pivot = fim
    let div = ini - 1
    // Loop for vai até a PENÚLTIMA posição
      for(let i = ini; i < fim; i++) 
      {
        if(fnComp(vetor[pivot], vetor[i])) // Parâmetros invertidos pois definimos assim na arrow function
        { 
            comps++ // pelo simples fato de entrar no if temos uma comparação
            div++ // avançamos com o marcador div (do diagrama)
            if( i !== div) 
            { // Em alguns casos o i vai estar no mesmo lugar do div, então aqui verificamos se é diferente e fazemos a troca abaixo
                [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ] // Fazemos a troca de posição entre os elementos
                totTrocas++
            } 
        }
      }
    div++
    if(fnComp(vetor[div], vetor[pivot])) // Parâmetros invertidos pois definimos assim na arrow function
    { 
        [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ] // Fazemos a troca de posição entre os elementos
        totTrocas++
    }
    comps++

    // Ordena o subvetor a esquerda do pivô
    quickSort(vetor, fnComp, ini, div - 1)

    // Ordena o subvetor a direita do pivô
    quickSort(vetor, fnComp, div + 1, fim)
    }
}

 import { candidatos } from './includes/candidatos-2018.mjs'

totTrocas = 0, pass = 0, comps = 0
// console.log('Antes:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
// quickSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

// Ordenação por SG_UE, depois por DS.CARGO e, finalmente, por NF_CANDIDATO
let candidatosSP = candidatos.filter(obj3 => obj3.SG_UE === 'SP') // Filtramos apenas os candidatos de SP e ordenamos abaixo
quickSort(candidatosSP, (obj1, obj2) =>
{
    if(obj1.SG_UE === obj2.SG_UE) // Se o estado for o mesmo (UF)
    { // E tiverem o mesmo cargo \/
        if(obj1.DS_CARGO === obj2.DS_CARGO) return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO // Retorna ordenando os candidatos com numero mais baixos primeiro
        else return obj1.DS_CARGO > obj2.DS_CARGO
    }
    // Estados diferentes, diferencia por estado (UF)
    else return obj1.SG_UE > obj2.SG_UE
}) 
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatosSP)
console.log({totTrocas, pass, comps, memoria})