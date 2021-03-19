// Fatorial de um número

// 5! = 5 * 4 * 3 * 2 * 1 (120)
// 4! = 4 * 3 * 2 * 1 (24)

// Função que receba um número qualquer e calcule o fatorial pelo métido ITERATIVO

function fatorial1(n){
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

console.log(fatorial1(5))
console.log(fatorial1(4))

// 5! = 5 * 4 * 3 * 2 * 1 (120)
// 4! = 4 * 3 * 2 * 1 (24)
// 5! = 5 * 4! ou 5! = 5 * (5-1)! é a mesma coisa de 5! = 5 * 4 * 3 * 2 * 1 (120)
// n! = n * (n-1)!
// 1! = 1 Truísmo
// 0! = 1 Truísmo

console.log('----------')
// Função de cálculo do fatorial pelo método RECURSIVO
// Nesse método a função fica chamando ela mesma até atingir a condição de saída
function fatorial2(n){
    if(n <= 1) return 1  // Condição de saída
    else return n * fatorial2(n-1)
}

console.log(fatorial2(5))
console.log(fatorial1(4))