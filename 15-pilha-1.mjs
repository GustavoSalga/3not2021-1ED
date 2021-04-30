const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = []

// Processo de empilhamento (desmontar letra por letra e empilhar)
for(let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i)) // função charAt vai buscar cada letra e colocar no final da pilha através do push
}
console.log(pilha)

// pilha.splice(16, 0, 'b', 'a', 't', 'a', 't', 'a') // Inserindo caracteres na posição 16 em diante (ESTRAGA O PALINDROMO)

let textoRev = '' // declaramos a variável texto reverso

// Desempilhamento
while(pilha.length) { // Nesse algoritmo, ele percorre toda a extensão do vetor, onde a posição 0 é false, fazendo o while encerrar
    textoRev += pilha.pop()
}
console.log(textoRev)