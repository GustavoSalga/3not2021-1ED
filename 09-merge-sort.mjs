/*********************
 *  MERGE SORT
 * No processo de ordenação, esse algoritmo "desmonta" o vetor original contendo N elementos até obter N vetores
 * de apenas um elemento cada um.
 * Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor, dessa vez com os elementos já em ordem
 * 
 */

function mergeSort(vetor) {
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

        console.log({vetEsq, vetDir})

        // Função para juntar novamente os vetores desmontados acima
        function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = [] // pEsq e pDir fazem o papel das setas na explicação do diagrama do prof
        while(pEsq < vetEsq.length && pDir < vetDir.length) { // Enquanto as setas estiverem dentro do comprimento do vetor
            if(vetEsq[pEsq] < vetDir[pDir]) { // Se a posição da seta no vetor esquerda for menor que a posição da seta no vetor direita
                vetRes.push(vetEsq[pEsq]) // Puxar o valor no vetor da esquerda na posição da seta para o vetor vazio
                pEsq++ // Mover a seta para a direita
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
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
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)

        const vetFinal = mesclar(vetEsq, vetDir)
        console.log ({vetFinal})
        return vetFinal
    }
    return vetor // Vetor de 1 elemento, não modificado
} // A função mesclar está dentro da função mergeSort

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
let numsOrd = mergeSort(nums)
console.log({numsOrd})