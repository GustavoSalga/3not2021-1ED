export class Queue {

     #data // armazenamento
     #head // para controlar os elementos do início da fila
     #tail // Para controlar os elementos no final da fila

    constructor() {
         this.#data = {} // objeto vazio
         this.#head = 0 // início da fila
         this.#tail = -1 // fim da fila
    }
    enqueue(val) {
        this.#tail++
        this.#data[this.#tail] = val
    }
    dequeue() {
        
        if(this.empty) return undefined // Se a fila já estiver vazia, basta dar um return undefined para encerrar

        let temp = this.#data[this.#head] // Tira uma cópia do elemento do início da fila
        delete this.#data[this.#head] // Apaga o elemento do início da fila
        this.#head++ // Chega o início da fila para "frente" - Lembrar do exemplo da fila por senha no açougue
        return temp // retornamos o valor salvo em temp
    }

    peek() {
        return this.#data[this.#head]
    }

    get empty() {
        return this.#tail - this.#head + 1 === 0 // imagine uma fila de açougue com senha, a partir do momento que uma senha foi usada, ela nunca será a 1° da fila de novo
    }

    print() {
        return JSON.stringify(this.#data)
    }
}