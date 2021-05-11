/*
ESTRUTURA DE DADOS LISTA ENCADEADA
- A lista encadeada é uma estrutura de dados formada por unidades
de informação chamadas nodos ou nós.
- Cada nodo da lista encadeada tem duas partes: uma, que armazena a
informação e outra que guarda o endereço do próximo nodo da sequência
- A qualquer momento, temos um conhecimento apenas limitado de onde
se encontram todos os nodos da lista. Sabemos apenas onde está o
primeiro e o último nodo da sequência. Os nodos intermediários precisam
ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

class Node { // classe para criar os Nodos
    constructor(val) {
       this.data = val // Armazenamento de valor
       this.next = null // Ponteiro para o próximo nodo
    }
}

export class LinkedList { // classe para criar a lista
    #head // Nodo inicial da lista
    #tail // Nodo final da lista
    #count // Quantidade de nodos na lista

    constructor() {
        this.#head = null // Null define que está vazia, não tem nada no início
        this.#tail = null // Null define que está vazia, não tem nada no fim
        this.#count = 0 // como não tem nada, 0 nodos na lista

        // console.log({head: this.#head, tail: this.#tail, count: this.#count})

    }
    get empty() {
        return this.#count === 0
    }

    // Método para inserir em uma posição arbitrária
    insert(pos, val) {

        // Precisamos criar um nodo para abrigar o valor (val)
        let inserted = new Node(val)

        // 1° caso: inserção quando a lista está vazia
        if(this.empty) {
            this.#head = inserted // Usamos o nodo criado acima e inserimos o valor na estrutura
            this.#tail = inserted // Usamos o nodo criado acima e inserimos o valor na estrutura
        }

        // 2° caso: inserção no início da lista (depois que ja temos algo inserido)
        else if(pos === 0) {
            // O elemento depois do nodo inserido é o atual head (antes da mudança)
            inserted.next = this.#head
            // o novo head passa a ser o nodo inserido
            this.#head = inserted
        }

        // 3° caso: inserção no final da lista (depois que já temos algo iserido)
        else if(pos >= this.#count) {
            // o elemento no tail atual passa a ser o nodo inserido
            this.#tail.next = inserted
            // O nodo inserido passa a ser o novo tail
            this.#tail = inserted
        }

        // 4° caso: inserção no meio da lista
        else {
            let before = this.#head // Nodo ANTERIOR a posição de inserção
            for(let i = 0; i < pos - 1; i++) before = before.next // Percorrendo a lista até encontrar o nodo da posição anterior a solicitada para inserção
            let after = before.next // O nodo que irá ficar depois do nodo inserido
            inserted.next = after // o próximo do nodo inserido passa a ser o nodo after
            before.next = inserted // o próximo do nodo before passa a ser o nodo inserido
        }
        this.#count++

        // console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    print() {
        let output = '( '
        let node = this.#head // partindo da primeira posição
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]: ${node.data}`
            if(node.next) output += ' -> ' // se o node dele não for null (ou seja, não for o último), imprimir a flecha
            node = node.next // node agora é o próximo dele mesmo, node será o próximo
        }

        return output + ` ) count: ${this.#count}`

    }
}

let lista = new LinkedList()
console.log(lista.print())

lista.insert(0, 76)
console.log(lista.print())

lista.insert(0, 22)
console.log(lista.print())

lista.insert(2, 8)
console.log(lista.print())