/*

    1) Observe a árvore binária representada na figura "arvore.png". Responda:

        a) Quantos níveis essa árvore possui? 
        Resposta: 6 níveis

        b) Qual a altura da subárvore cuja raiz é 16?
        Resposta: 4 de altura

        c) Qual a profundidade do nodo de valor 29?
        Resposta: 4 de profundidade

    5) Anexe este arquivo, com o código da árvore binária de busca, ao
        entregar a prova.

*/

// 2) Monte em código, neste arquivo, a árvore representada na figura.
import { BinarySearchTree } from './lib/BinarySearchTree.mjs'

const exec01 = new BinarySearchTree() // declarando a constante que receberá a árvore

// inserindo o nó raiz root
exec01.insert(51)

// inserindo o segundo nível
exec01.insert(16)
exec01.insert(87)

// inserindo o terceiro nível
exec01.insert(9)
exec01.insert(44)
exec01.insert(72)
exec01.insert(99)

// inserindo o quarto nível
exec01.insert(1)
exec01.insert(14)
exec01.insert(35)
exec01.insert(58)
exec01.insert(79)
exec01.insert(92)

// inserindo o quinto nível
exec01.insert(29)
exec01.insert(43)
exec01.insert(60)
exec01.insert(86)

// inserindo o sexto nível
exec01.insert(20)

// 3) No código, remova os seguintes nodos: 58, 35, 87 e 51.

exec01.remove(58)
exec01.remove(35)
exec01.remove(87)
exec01.remove(51)

/* 4) Execute os métodos de percurso da árvore e anote, abaixo, os respectivos resultados após as remoções:
        a) Percurso em-ordem: 1,  9, 14, 16, 20, 29, 43, 44, 60, 72, 79, 86, 92, 99
        b) Percurso pré-ordem: 44, 16,  9,  1, 14, 29,20, 43, 86, 72, 60, 79, 99, 92
        c) Percurso pós-ordem: 1, 14,  9, 20, 43, 29, 16, 60, 79, 72, 92, 99, 86, 44
*/

let emOrdem = [] // criando o vetor
exec01.inOrderTraversal(val => emOrdem.push(val)) // Inserindo o percurso em ordem no vetor
console.log({emOrdem})

let posOrdem = [] // criando o vetor
exec01.postOrderTraversal(val => posOrdem.push(val)) // Inserindo o percurso pós ordem no vetor
console.log({posOrdem})

let preOrdem = [] // criando o vetor
exec01.preOrderTraversal(val => preOrdem.push(val)) // Inserindo o percurso pré ordem no vetor
console.log({preOrdem})

