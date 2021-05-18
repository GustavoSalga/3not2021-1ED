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

    insertHead(val) {
        this.insert(0, val)
    }

    insertTail(val) {
        this.insert(this.#count, val)
    }

    remove(pos) {

        // 1° caso (quando não é possível remover): a lista está vazia ou a posição informada é menor que zero ou maior que count -1
        if(this.empty || pos < 0 || pos > this.#count -1) return undefined

        let removed

        // 2° caso remoção do início da lista
        if(pos === 0) {
            removed = this.#head
            this.#head = this.#head.next

            // Atualizando o #tail em caso de remoção do último NODO (pois o penultimo continua apontando para algo que foi removido)
            if(this.#count === 1) this.#tail = this.#head.next // o next vai ser null pois não existe
        }

        // 3° caso: remoção de posição intermediária
        else {
            let before = this.#head
            for(let i = 0; i < pos - 1; i++) before = before.next
            removed = before.next
            let after = removed.next
            before.next = after

            // Atualizando o #tail em caso de remoção do último NODO
            if (pos === this.#count - 1) this.#tail = before
        }
            

        this.#count--

        return removed.data

    }

    removeHead() {
        return this.remove(0)
    }

    removeTail() {
        return this.remove(this.#count - 1)
    }

    // Retorna a posição de um valor dentro da lista, ou -1 caso não exista
    indexOf(val) {

        // 1° caso: a lista vazia
        if(this.empty) return -1

        // 2° caso: o valor está no início da lista
        if(this.#head.data === val) return 0

        // 3° caso: nas demais posições
        let search = this.#head
        for(let i = 0; i < this.#count; i++){
            if(search.data === val) return i // Encontrou a posição, retorna ela (i)
            search = search.next
        }
        // Acabou o loop sem retornar, é porque não existe o valor perguntado
        return -1
    }

    peek(pos) {
        // Lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos > this.#count -1) return undefined

        let node = this.#head
        // Percorre a lista até a posição desejada
        for(let i = 0; i < pos; i++) node = node.next

        return node.data
    }

    peekHead() {
        return this.peek(0)
    }

    peekTail(){
        return this.peek(this.#count - 1)
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