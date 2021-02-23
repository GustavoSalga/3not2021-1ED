// Números

let a = 10, b = 8, c = 10
console.log (a > b) // é maior que
console.log (a < b) // é menor que
console.log (a == c) // é igual a
console.log (a != c) // é diferente de

console.log('------------')

// Strings
// Na tabela ASCII cada letra tem um "número" que fica crescente a medida que avançamos no alfabeto. 
// 'a' e 'A' e 'á' possuem números diferentes, etc
a = 'CATIFUNDA'
b = 'FELISBINO'
c = 'CATIFUNDA'
console.log (a > b) // é maior que
console.log (a < b) // é menor que
console.log (a == c) // é igual a
console.log (a != c) // é diferente de

console.log('------------')

// Booleanos
// existe também um valor de grandeza associado a True e Falso. Geralmente True = 1 e False = 0
// Portanto os resultados das comparações abaixo
a = true
b = false
c = true
console.log (a > b) // é maior que
console.log (a < b) // é menor que
console.log (a == c) // é igual a
console.log (a != c) // é diferente de

console.log('------------')

// Vetores
// Não é possível comparar diretamente dois vetores pois os resultados são inconsistentes
a = [10, 20, 30, 40, 50]
b = [-3, -2, -1]
c = [10, 20, 30, 40, 50]
console.log (a > b) // é maior que
console.log (a < b) // é menor que
console.log (a == c) // é igual a
console.log (a != c) // é diferente de

console.log('------------')

// Objetos
// Não é possível comparar diretamente dois objetos pois os resultados são inconsistentes
a = { marca: 'Fiat', modelo: '147', ano: 1979}
b = { marca: 'Chevrolet', modelo: 'Chevette', ano: 1982}
c = { marca: 'Fiat', modelo: '147', ano: 1979}
console.log (a > b) // é maior que
console.log (a < b) // é menor que
console.log (a == c) // é igual a
console.log (a != c) // é diferente de

// CONCLUSÃO: Apenas os seguintes tipos de dados são diretamente comparáveis: 
// - number
// - string
// - boolean