/************
 * Uma classe pode ser comparada a uma forma de bolo. Assim como esse utensílio, a classe empresta
 * algumas características aos objetos que serão criados a partir dela, embora outras características dos objetos possam
 * variar.
 * 
 * OBS: Não iremos criar um objeto do nada, vamos criá-lo a partir de uma receita.
 */

 // Por convenção, nomes de classes em JS se iniciam com letras MAIÚSCULAS.

 class FormaGeometrica
 {
     // Declaração dos atributos privados
     #base
     #altura
     #tipo
     
    // Uma classe pode conter funções. Mas, quando funções fazem parte de uma classe, elas são denominadas
    // de MÉTODOS.

    // Um método especial é o constructor(). Ele é chamado toda vez que se vai criar um novo objeto
    // a partir da classe. No constructor(), podem ser feitas validações que, ao falhar, geram um Error.A existência
    // de um ou mais Errors, impede que o objeto seja criado.
    constructor(base, altura, tipo) // São os parâmetros que o meu ojbeto precisa ter. Vamos usar o do exemplo 13
    {
        // Base deve ser numérica e seu valor maior que zero
        if(isNaN(base) || base <= 0) throw new Error('A base deve ser numérica e seu valor maior que zero')

        // Altura deve ser numérica e seu valor maior que zero
        if(isNaN(altura) || altura <= 0) throw new Error('A altura deve ser numérica e seu valor maior que zero')

        // if(tipo !== 'Q' && tipo !== 'T' && tipo !== 'E') pode ser escrito resumidamente como abaixo:
        if(! ['Q', 'T', 'E'].includes(tipo)) throw new Error('O tipo deve ser Q, T ou E')

    /*******
     * Se chegamos até aqui, podemos prosseguir com a criação do objeto.
     * No caso atual, precisamos armazenar as informações de base, altura e tipo em algum lugar, de modo que, ao sair
     * do constructor(), essas informações não se percam
     */

     // Para tanto, armazenaremos essas informações em variáveis que pertencerão ao escopo da classe.
     // Essas variáveis especiais são demoninadas ATRIBUTOS e diferenciam-se das 
     // variáveis comuns pela presença do prefixo this.

     // atributo recebe valor do parâmetro de mesmo nome
     
     // OBS:: 
     // ATRIBUTOS PÚBLICOS: Podem ser acessados e modificados FORA da classe
     /*
     this.base = base
     this.altura = altura
     this.tipo = tipo
     */

    // ATRIBUTOS PRIVADOS: Podem ser acessados e modificados apenas DENTRO da classe.
    this.#base = base
    this.#altura = altura
    this.#tipo = tipo
    console.log(this) // Vai printar o próprio objeto um por vez, que criamos ali embaixo
    }
 }
 // Se der erro, vamos fazer com que ele não interrompa a execução do programa

 // 1° declaramos as variáveis

 let forma1, forma2, forma3

 // 2° criamos o bloco Try {} que tenta executar as linhas contidas e se acontecer alguma exceção no bloco try {}, 
 // a execução é desviada para o bloco catch {}
try {
  forma1 = new FormaGeometrica(5, 3.7, 'T') // Triângulo
}
    catch(erro) {// 3° O bloco catch() recebe o erro que foi gerado no bloco try.Tratamento de exceção. Nessa caso, simplesmente exibiremos a mensagem de erro
  console.log('ERRO:' + erro.message)
}

try {
  forma4 = new FormaGeometrica('batata', 'alho', 'X')
}
    catch(erro) { // 3° O bloco catch() recebe o erro que foi gerado no bloco try.Tratamento de exceção. Nessa caso, simplesmente exibiremos a mensagem de erro
  console.log('ERRO:' + erro.message)
}

try {
  forma2 = new FormaGeometrica(4.8, 6.4, 'E') // Elipse
}
    catch(erro) { // 3° O bloco catch() recebe o erro que foi gerado no bloco try.Tratamento de exceção. Nessa caso, simplesmente exibiremos a mensagem de erro
  console.log('ERRO:' + erro.message)
}

try {
  forma3 = new FormaGeometrica(153.7, 122.1, 'Q') // Quadrilátero
}
    catch(erro) { // 3° O bloco catch() recebe o erro que foi gerado no bloco try.Tratamento de exceção. Nessa caso, simplesmente exibiremos a mensagem de erro
  console.log('ERRO:' + erro.message)
}