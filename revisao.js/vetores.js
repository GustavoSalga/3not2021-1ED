let frutas =['maçã', 'laranja', 'pera', 'uva', 'mamão', 'banana']

// Vetor original
console.log(frutas)

// Retirar o ultimo elelmento de um vetor
let ultimaFruta = frutas.pop() // Remove e transforma em uma String

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

// Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift() // Remove e transforma em uma String
console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária
// 1° parâmetro (2) define a posição da remoção (contagem começa em 0)
// 2° parâmetro (1) define a quantidade de elementos a remover
let terceiraFruta = frutas.splice(2, 1) // Sempre remove e transforma em um outro vetor, pois ele pode remover mais de 1 item de uma vez
console.log(frutas)
console.log(terceiraFruta)
