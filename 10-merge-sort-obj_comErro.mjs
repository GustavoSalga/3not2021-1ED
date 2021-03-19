let comps, divisoes, juncoes // comparações, divisões e junções

function mergeSort(vetor, fnComp) {

    // Desmontando um vetor que deve ter pelo menos 2 elementos
    if(vetor.length > 1) {
        // Dividindo o vetor em 2
        const meio = Math.floor(vetor.length / 2)
        // Criando duas variáveis vetor esquerdo e vetor direito
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada (inclusive)
        // até a posição final (exclusive). Ou seja, abaixo o 0 entra e o meio não
        let vetEsq = vetor.slice(0, meio)
        // Caso o segundo parâmetro de slice() seja omitido, serão copiados os elementos
        // desde a posição inicial até a posição final
        let vetDir = vetor.slice(meio)
        divisoes++ // Nesse algoritmo acima estamos dividindo os vetores

        // console.log({vetEsq, vetDir}) está comentado para o teste do vetor de nomes que tem muitos nomes

        // Função para juntar novamente os vetores desmontados acima
        function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = [] // pEsq e pDir fazem o papel das setas na explicação do diagrama do prof
        while(pEsq < vetEsq.length && pDir < vetDir.length) { // Enquanto as setas estiverem dentro do comprimento do vetor
            // if(vetEsq[pEsq] < vetDir[pDir]) { Se a posição da seta no vetor esquerda for menor que a posição da seta no vetor direita
            if(fnComp(vetDir[pDir], vetEsq[pEsq])) { // Parâmetros invertidos do de cima (comentado)
                vetRes.push(vetEsq[pEsq]) // Puxar o valor no vetor da esquerda na posição da seta para o vetor vazio
                pEsq++ // Mover a seta para a direita
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++ // Na parte if(vetEsq[pEsq] < vetDir[pDir]) é uma comparação
        }
        // Descobrir de qual lado sobrou
        let sobra
        // Verificando se sobrou na esquerda
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq) // Se sobrar mais valores depois da seta esquerda, mas a seta direita já terminou, juntamos todo o restante da seta esquerda no vetRes
        // Se sobrar na direita
        else sobra = vetDir.slice(pDir) // Se sobrar mais valores depois da seta direita, mas a seta esquerda já terminou, juntamos todo o restante da seta direita no vetRes

        // Retorna vetor de resultados + sobra
        return [...vetRes, ...sobra] // os ... significam desestruturação. Juntamos o que já tinhamos no vetRes com a sobra
    }

    // Chamadas recursivas à função
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        const vetFinal = mesclar(vetEsq, vetDir)
        juncoes++
        // console.log ({vetFinal}) está comentado para o teste do vetor de nomes que tem muitos nomes
        return vetFinal
    }
    return vetor // Vetor de 1 elemento, não modificado, condição de saída
} // A função mesclar está dentro da função mergeSort

import { candidatos } from './includes/candidatos-2018.mjs'

comps = 0, divisoes = 0, juncoes = 0
//  console.log('Antes:', candidatosOrd)
 console.time('Ordenando candidatos...')
 // Ordenando pelo nome de urna (NM_URNA_CANDIDATO )
//  const candidatosOrd = mergeSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

// Ordenando por 2 critérios: Primeiro por Estado (SG_UF) e, dentro dessa primeira ordenação, uma segunda pelo n° do candidato (NR_CANDIDATO)
const candidatosOrd = mergeSort(candidatos, (obj1, obj2) => {
if(obj1.SG_UE === obj2.SG_UE){ // Se dois candidatos forem do mesmo estado então definimos a ordem pelo segundo critério
    return (obj1.NR_CANDIDATO > obj2.NF_CANDIDATO) // Definindo a ordem pelo segundo critério
}
else return obj1.SG_UE > obj2.SG_UE // A diferenciação se dá pelo Estado
})
 let memoria = process.memoryUsage().heapUsed / 1024 / 1024
 console.timeEnd('Ordenando candidatos...')
 console.log('DEPOIS:', candidatosOrd)
//  candidatosOrd.map(obj => console.log(obj))
 console.log({comps, divisoes, juncoes, memoria})