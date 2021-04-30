import { Stack } from './lib/Stack-obj.mjs'

const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = new Stack()

// Processo de empilhamento (desmontar letra por letra e empilhar)
for(let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i)) // função charAt vai buscar cada letra e colocar no final da pilha através do push
}

console.log(pilha.print()) // esse console log que mostra a pilha criada, pode-se comentar para visualizar apenas o resultado

let textoRev = '' // declaramos a variável texto reverso

// Desempilhamento
while(! pilha.empty) { // o símbolo "!" significa NOT, no caso enquanto a pilha não estiver vazia, o while continua removendo
    textoRev += pilha.pop()
}
console.log(textoRev)