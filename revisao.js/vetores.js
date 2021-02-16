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
// Parâmetros:
// 1° parâmetro (2) define a posição da remoção (contagem começa em 0)
// 2° parâmetro (1) define a quantidade de elementos a remover
let terceiraFruta = frutas.splice(2, 1) // Sempre remove e transforma em um outro vetor, pois ele pode remover mais de 1 item de uma vez
console.log(frutas)
console.log(terceiraFruta)

// Inserindo elemento no final do vetor
// Quando se quer inserir e não se tem preocupação de em que posição irá parar o elemento, podemos usar o PUSH
frutas.push('amora') // Podemos inserir mais de um objeto no vetor, por exemplo:
// frutas.push('amora','jaca')
console.log(frutas)

// Inserir no início do vetor
frutas.unshift('jabuticaba') // Também pode inserir mais de um objeto ao mesmo tempo, por exemplo:
// frutas.unshift('jabuticaba','mexerica')
console.log(frutas)

// Inserir no meio do vetor
// Parâmetros:
// 1° Inserindo na terceira posição (2).
// 2° n° de Elementos a serem incluídos, para inserção usa-se (0)
// 3° 'Pêssego' é o objeto a ser inserido
frutas.splice(2, 0, 'pêssego')
// Também funciona para inserir vários elementos ao mesmo tempo, por exemplo:
// frutas.splice(2, 0, 'pêssego', 'jaca', 'nectarina')
console.log(frutas)

// Usando splice, vamos substituir um vetor e manter a mesma quantidade de objetos
// Parâmetros:
// 1° posição para substituição
// 2° posição para quantidade de elementos que serão excluidos (para substituição, 1)
// 3° o elemento que será incluído no lugar
frutas.splice(4, 1, 'ameixa') // Substituição na quinta posição
console.log(frutas)

// Inserção multiplas com splice()
frutas.splice(1, 0, 'nectarina', 'jaca')
console.log(frutas)

/*************************
 * PERCURSOS DE VETORES
 */
console.log('---------------') // só para separar dos console.log acima
 // 1) Percurso com for tradicional

 // a) A contagem começa em (0 = primeiro elemento)
 // b) Ocorre enquanto o contador for MENOR que o número de elementos do vetor
 // c) length termina com TH
 // d) é o método mais flexível pois, se necessário, é possível fazer um percruso parcial, ou seja
 // começar em algum elemento que não é o primeiro e terminar antes do final
 for(let i = 0; i < frutas.length; i++){
     console.log(i, frutas[i])
 }

 console.log('----------------------') // só para separar dos console.log acima
 // 2) For tradicional, em ordem inversa, decrescente

 for(let i = frutas.length - 1; i >= 0; i--){
     console.log(i, frutas[i])
 }

 console.log('---------------------') // só para separar dos console.log acima

 // 3) Percurso com for..of

 // a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de uma variável contadora
 // Variáveis:
 // f --> variável que receberá cada elemento do vetor (pode ser qualquer nome válido de variável)
// frutas --> é o vetor a ser percorrido
 for(let f of frutas){
     // console.log(x, f) --> dessa forma podemos incluir o contador novamente, mas se for assim melhor usar o for tradicional
     // x++
     console.log(f)
 }

 console.log('---------------------') // só para separar dos console.log acima

 // 4) Percurso com forEach()
 // forEach() recebe como parâmetro uma função que recebe como parâmetro cada elemento do vetor
 // O nome do parâmetro da função pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento){
    console.log(elemento)
})

console.log('---------------------') // só para separar dos console.log acima

// O mesmo forEach() usando uma arrow funcion como parâmetro
frutas.forEach(elemento => console.log(elemento))