/*************
 * ESTRUTURA DE DADOS PILHA
 * 
 * - Pilha é uma lista linear de acesso restrito, que permite apenas
 * operações de inserção (push) e retirada (pop), ambas ocorrendo no final de estrutura.
 * - Como consequência, a pilha funciona pelo princípio LIFO (last in, first out)
 * 
 *  obs: Imagine uma pilha de pratos, toda vez que se adiciona um prato, é por cima da pilha, se retirar um, também
 * é de cima da pilha.
 */

export class Stack {

    #data

     constructor () {
        this.#data = [] // Inicializa o vetor vazio
     }

    // Pperação de inserção
    push(value) {
        this.#data.push(value)
    }

    // Operação de retirada
    pop() {
        return this.#data.pop()
    }

    // "Peek": espiar o valor que está no topo da pilha, mas sem retirá-lo de lá
    peek() {
        return this.#data[this.#data.length - 1]
    }
    
    // A pilha está vazia se for true (pilha na posição 0) e false para qualquer outra posição
    get empty() {
        return this.#data.length === 0
    }

    print() { // Essa função chamada print é uma das formas de acessar o vetor que está privado dentro da classe
        return JSON.stringify(this.#data)
    }
 }

/* APENAS TESTES EXEMPLO DADOS EM AULA

let pilha = new Stack();
//  pilha.pop() // o pop remove o último adicionado ao vetor em ordem
pilha.push(5) // o número 5 assume o valor de value declarado acima e entra no vetor
pilha.push(6)
pilha.push(0)
pilha.push(2)
console.log('Peek:', pilha.peek())
console.log(pilha.empty)
console.log(pilha.print())
let x = pilha.pop()
console.log('Pop:', x)
console.log('Peek:', pilha.peek())
console.log(pilha.print())

*/