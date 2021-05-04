/*************
 * ESTRUTURA DE DADOS FILA
 * 
 * - Fila é uma lista linear de acesso restrito, que permite apenas
 * operações de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo no final da estrutura,
 * e a segunda no início da estrutura.
 * - Como consequência, a pilha funciona pelo princípio FIFO (first in, first out)
 * 
 * - A principal aplicação das filas são tarefas que envolvem o processamento de tarefas por ordem de chegada.
 * */

 export class Queue {

     #data

     constructor() {
         this.#data = [] // criando um vetor vazio
    }

    // Inserção na fila (enfileiramento)
    enqueue(val) {
        this.#data.push(val) // usamos o push pois ele opera no final do vetor
    }

    // Remoção da fila (desenfileiramento)
    dequeue() {
        return this.#data.shift() // usamos o shift pois ele retira do início do vetor (dando ai sentido a fila)
    }

    // "Espiadinha" no início da fila (na frente)
    peek() {
        return this.#data[0] // o primeiro elemento sempre estará na posição 0 (1° posição no vetor)
    }

    get empty() {
        return this.#data.length === 0 // caso acabar a fila
    }

    print() {
        return JSON.stringify(this.#data) // o stringify vai transformar o vetor em uma string para ser vista, por exemplo, no console.log
    }
 }