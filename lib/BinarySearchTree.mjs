/*
ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
- Árvore ~> é uma estrutura de dados não-linear, hierárquica,
que é formada recursivamente por outras subárvores.
- Árvore binária ~> uma árvore na qual cada nodo tem grau máximo
igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
diretos).
- Árvore binária de busca ~> é uma árvore binária otimizada para a
operação de busca binária. Por isso, na inserção, os valores são
colocados já em ordem.
*/

class Node {
    constructor(val) {
        this.data = val
        this.left = null // Ponteiro para a subárvore esquerda
        this.right = null // Ponteiro para a subárvore direita
    }
}

export class BinarySearchTree {
    #root // raiz da árvore

    constructor() {
        this.#root = null
        console.log(this.#root)
    }

    insert(val) {

        let node = new Node(val)
        // 1° caso: Árvore vazia
        if(this.#root === null)  this.#root = node

        // 2° caso: Inserção recurssiva ~> percorre a árvore recurssivamente para encontrar a posição do novo nodo.
        else this.#insertNode(node, this.#root)

        console.log(this.#root)
    }

    // Função privada e recurssiva
    // node ~> nodo a ser inserido
    // root ~> a raiz da SUBÁRVORE onde será feita a inserção
    #insertNode(node, root) {
        // 1° caso:
        if(node.data < root.data) { // Verifica se o node é menor que a raiz (root), se for, vai para o nodo esquerda
            // Verifica se o nodo à esquerda da raiz está desocupado e, se for o caso, insere aí o nodo.
            if(root.left === null) root.left = node
            // Caso o nodo à esquerda da raiz já exista, reiniciamos o processo considerando este como raiz da SUBÁRVORE
            else this.#insertNode(node, root.left) // Considera o segundo parâmetro (root) como aquele a sua esquerda (root.left) e o transforma em raíz
        }
        else if(node.data > root.data) { // o valor inserido é maior que o valor da raíz root?
            if(root.right === null) root.right = node // se o valor do nodo a direita do root for null
            else this.#insertNode(node, root.right) // Considera o segundo parâmetro (root) como aquele a sua direita (root.right) e o transforma em raíz
        }
        // Note que, se o valor do nodo for IGUAL ao valor da raiz, nada acontece: o pedido de inserção é ignorado
        // para evitar valores duplicados na árvore.
    }

    /***********
     * PERCURSOS (IN ORDER) - usado para conhecer e ordenar os valores dentro da arvore
     * 1°: visita em-ordem a subárvore esquerda
     * 2°: visita a raiz
     * 3°: visita em-ordem a subárvore direita
     */
    // fnCallBack: função externa que será chamada toda vez que o percurso passar por um nodo
    inOrderTraversal(fnCallBack, root = this.#root) {
        if(root !== null) { // Se a raíz NÃO for nula (!== not)
            this.inOrderTraversal(fnCallBack, root.left) // 1°
            fnCallBack(root.data) // 2°
            this.inOrderTraversal(fnCallBack, root.right) // 3°
        }
    }
    /***********
     * PERCURSOS (PRE ORDER) - Usado para conhecer a hierarquia dentro da arvore (do pai para o filho), pouco usado em arvore binária mas muito útil em arvores com muitos filhos
     * 1°: visita a raiz
     * 2°: visita pré-ordem a SUBÁRVORE esquerda
     * 3°: visita pré-ordem a SUBÁRVORE direita
     */
    // fnCallBack: função externa que será chamada toda vez que o percurso passar por um nodo
    preOrderTraversal(fnCallBack, root = this.#root) {
        if(root !== null) { // Se a raíz NÃO for nula (!== not)
            fnCallBack(root.data) // 1°
            this.preOrderTraversal(fnCallBack, root.left) // 2°
            this.preOrderTraversal(fnCallBack, root.right) // 3°
        }
    }
    /***********
     * PERCURSOS (POS ORDER) - Usado para conhecer a hierarquia dentro da arvore (dos filhos para o pai), pouco usado em arvore binária mas muito útil em arvores com muitos filhos
     * 1°: Visita pos-ordem a SUBÁRVORE esquerda
     * 2°: visita pos-ordem a SUBÁRVORE direita
     * 3°: visita a raiz
     */
    // fnCallBack: função externa que será chamada toda vez que o percurso passar por um nodo
    postOrderTraversal(fnCallBack, root = this.#root) {
        if(root !== null) { // Se a raíz NÃO for nula (!== not)
            this.postOrderTraversal(fnCallBack, root.left) // 1°
            this.postOrderTraversal(fnCallBack, root.right) // 2°
            fnCallBack(root.data) // 3°
        }
    }
}

const arvore = new BinarySearchTree()
arvore.insert(41)
arvore.insert(76)
arvore.insert(19)
arvore.insert(34)
arvore.insert(88)
arvore.insert(25)

let percursoEmOrdem = []
arvore.inOrderTraversal(val => percursoEmOrdem.push(val))
console.log({percursoEmOrdem})

let percursoPreOrdem = []
arvore.preOrderTraversal(val => percursoPreOrdem.push(val))
console.log({percursoPreOrdem})

let percursoPostOrdem = []
arvore.postOrderTraversal(val => percursoPostOrdem.push(val))
console.log({percursoPostOrdem})