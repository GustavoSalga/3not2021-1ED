/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    
     Resposta:
     Estrutura de Dados: LinkedList
     Método: Remove

    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    
    e -> chamando a classe 
    i -> função
    j -> parâmetro da função (a posição que deve ser removida)
    h -> contador de nodos (count) da lista
    k -> o que será removido
    f -> nodo inicial da lista (head)
    g -> nodo final da lista (tail)
    c -> é o próximo nodo da posição que estivermos (next)
    l - > é a variável que vai receber o que tinha antes (before) daquilo que será removido
    m -> é a variável que vai receber o que tinha depois (after) daquilo que será removido
    b -> valor dentro do nodo (data)
    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {

    /* Código omitido */

    i(j) { // função remove com parâmetro posição
        if(this.empty || j < 0 || j > this.#h - 1) return undefined // aqui verificamos se a lista está vazia, ou se a posição 
        // informada é menor que zero, ou maior que o (contador - 1), que siginfica que a posição é maior que o tamanho de itens na lista
        let k // declara a variável que receberá o que será removido

        if(j === 0) { // Caso de remoção no início da lista, verificando se a posição é igual a 0
            k = this.#f // definimos que o nodo K que será removido recebe o nodo inicial Head 
            this.#f = this.#f.c // O nodo que era Head assume o nodo da frente dele (head.next) (#f.c)
            if(this.#h === 1) this.#g = this.#f.c // Essa linha é necessário se a lista tiver 1 itens. Ao remover o primeiro item, 
            // ela vai transformar o nodo restante (tail #g) no nodo (head.next #f.c). Assim temos Head e Tail sendo a mesma posição
        }
        else { // Em caso de remoção de posição intermediária
            let l = this.#f // a variável l assume o nodo inicial head
            for(let i = 0; i < j - 1; i++) l = l.c // for para percorrer a lista, fazendo nodo before (l) assumir o nodo da frente dele (before.next)
            k = l.c // O nodo a ser removido será o nodo da frente do nodo before(l)
            let m = k.c // Definimos que a variável after assume o nodo da frente do nodo que foi removido
            l.c = m // fazemos então a substituição dizendo que o nodo da frente do before será também o nodo da frente do que foi removido
            // Com isso fazemos os ponteiros do nodo anterior ao removido apontar para o nodo da frente do removido
            if(j === this.#h - 1) this.#g = l // Apenas atualizando o tail em caso de remoção do último nodo, mesmo caso de remoção no início da lista
        }

        this.#h-- // Como nós removemos um item, devemos subtrair um valor do contador (count)
        return k.b // retornamos o valor que estava dentro do nodo removido
    }

    /* Código omitido */

}