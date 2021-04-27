function k(m, n) {
    let o = 0, p = m.length - 1, q
    while(p >= o) {
        q = Math.floor((p + o) / 2)
        switch(n(m[q])) {
            case 0:
            return q 
        
        case 1: 
        o = q + 1
        default:
            p = q - 1
        }
    }
    return -1  // Não existe
}

/********
 *  Mapeamento
 * k -> função de busca
 * m -> vetor a ser percorrido
 * n -> parâmetro da função (FUNÇÃO DE COMPARAÇÃO fnComp)
 * p -> Marcador da POSIÇÃO FINAL (penúltima posição do vetor)
 * o -> Marcador da POSIÇÃO INICIAL (posição 0)
 * q -> Marcador da POSIÇÃO DO MEIO ( Final + Inicio / 2 )
*/

// Algoritmo de BUSCA BINÁRIA

// importando o vetor e fazendo a busca por Brazil dentro de Country
import { countries } from './includes/countries.mjs'

console.log(k(countries, (obj, busca = 'Brazil') => {
     if( busca === obj.country) return 0
     else if( busca < obj.country) return -1
     else return 1
    }))