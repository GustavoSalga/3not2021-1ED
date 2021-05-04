/*************
 * ESTRUTURA DE DADOS PILHA
 * 
 * - Pilha é uma lista linear de acesso restrito, que permite apenas
 * operações de inserção (push) e retirada (pop), ambas ocorrendo no final de estrutura.
 * - Como consequência, a pilha funciona pelo princípio LIFO (last in, first out)
 * 
 *  obs: Imagine uma pilha de pratos, toda vez que se adiciona um prato, é por cima da pilha, se retirar um, também
 * é de cima da pilha.
 * 
 * A principal aplicação das pilhas são tarefas que envolvem a inversão de uma sequência de dados
 */

export class Stack {

    #data
    #tail // cauda, fim da estrutura (topo da pilha)

     constructor () {
        this.#data = {} // Objeto vazio
        this.#tail = -1 // Pilha vazia
    }

    push(val) {
        this.#tail++ // se a pilha ainda está vazia, o tail anda de -1 para posição 0
        this.#data[this.#tail] = val
    }
    pop() { // Para retirar um item do ojbeto

        if(this.empty) return undefined // se a pilha estiver vazia, retorno undefined (o empty está declarado ali embaixo)
                                        // Já verificamos aqui no início do pop e damos um return para parar a função

        let temp = this.#data[this.#tail]
        delete this.#data[this.#tail] // usamos o tail como definidor de posição, pois ele sempre estará na última da pilha
        this.#tail-- // voltamos o tail uma posição
        return temp
    }

    peek() {
        return this.#data[this.#tail]
    }

    get empty(){ // Parâmetro que impede o objeto a ultrapassar a posição -1, em casos de POPS a mais do que itens
        return this.#tail === -1
    }

    print() {
        return JSON.stringify(this.#data)
    }
}