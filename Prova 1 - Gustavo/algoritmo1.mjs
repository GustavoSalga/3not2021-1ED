function k(m, fnComp, n = 0, o = m.length - 1) {
    if(o <= n) return
    const p = o
    let q = n - 1
    for(let i = n; i < o; i++) {
        if(fnComp(m[p], m[i])) {
            q++
            if(i !== q) [ m[i], m[q] ] = [ m[q], m[i] ]
        }
    }
    q++
    if(fnComp(m[q], m[p])) {
        [ m[p], m[q] ] = [ m[q], m[p] ]
    }
    k(m, fnComp, n, q - 1)
    k(m, fnComp, q + 1, o)
}

/*****
 * Mapeamento das variáveis
 * k - > FUNÇÃO PRINCIPAL DE ORDENAÇÃO
 * m - > VETOR A SER ORDENADO
 * n - > Marcador da POSIÇÃO INICIAL
 * o -> Marcador da POSIÇÃO FINAL (penúltima posição do vetor)
 * p -> Pivot do algoritmo, nessa implementação é a mesma da POSIÇÃO FINAL "o"
 * q -> Marcador DIV
 * i -> Posição que será comparada a posição do pivot e irá avançando e comparando
 */

 // Algoritmo de ordenação QUICK SORT

 // Importando o vetor e ordenando primeiro pelo campo `continent` e depois pelo campo `country`

import { countries } from './includes/countries.mjs'

// // Ordenação por 2 níveis feita por Gustavo (ERRADO)
// let countriesOrd = k(countries, (obj1, obj2) => {
//     if(obj1.continent === obj2.continent) { // Os continentes são os mesmos?
//         return obj1.country > obj2.country // Se não ordenar por país
//     }
//     else return obj1.continent > obj2.continent // Se sim, ordena por continente
// })
// console.log('Ordenados:', countriesOrd)

// Está dando undefined não sei pq 
// Recebi RUIM na ordenação por 2 níveis, o erro deve estar nela.

// Versão abaixo corrigida
k(countries, (a, b) => {
    if (a.continent === b.continent) {
    return a.country > b.country
    }
    else return a.continent > b.continent
})